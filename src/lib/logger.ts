/**
 * S3 Activity Logger
 *
 * Logs all client gallery operations to S3 for audit trail and debugging.
 * Future Claude sessions can read these logs to understand system history.
 *
 * Log files are stored at: logs/YYYY-MM-DD.json
 */

import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
})

const BUCKET_NAME = process.env.S3_BUCKET!

export type LogLevel = 'info' | 'warn' | 'error' | 'success'

export interface LogEntry {
  timestamp: string
  level: LogLevel
  action: string
  details: Record<string, unknown>
  userId?: string
  galleryId?: string
  error?: string
}

/**
 * Get today's date formatted as YYYY-MM-DD
 */
function getTodayKey(): string {
  const now = new Date()
  return now.toISOString().split('T')[0]
}

/**
 * Get the S3 key for a log file
 */
function getLogKey(date?: string): string {
  return `logs/${date || getTodayKey()}.json`
}

/**
 * Read existing logs from S3 for a given date
 */
async function readLogs(date?: string): Promise<LogEntry[]> {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: getLogKey(date),
    })

    const response = await s3Client.send(command)
    const body = await response.Body?.transformToString()

    if (body) {
      return JSON.parse(body)
    }
  } catch (error: unknown) {
    // File doesn't exist yet, return empty array
    if (error && typeof error === 'object' && 'name' in error && error.name === 'NoSuchKey') {
      return []
    }
    // Log read errors but don't throw - we'll start fresh
    console.error('Error reading logs:', error)
  }

  return []
}

/**
 * Write logs to S3
 */
async function writeLogs(logs: LogEntry[], date?: string): Promise<void> {
  try {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: getLogKey(date),
      Body: JSON.stringify(logs, null, 2),
      ContentType: 'application/json',
    })

    await s3Client.send(command)
  } catch (error) {
    console.error('Error writing logs to S3:', error)
    // Don't throw - logging should never break the main operation
  }
}

/**
 * Add a log entry
 */
export async function log(
  level: LogLevel,
  action: string,
  details: Record<string, unknown> = {},
  options: { galleryId?: string; userId?: string; error?: string } = {}
): Promise<void> {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    action,
    details,
    ...options,
  }

  // Also log to console for immediate visibility
  const consoleMethod = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log'
  console[consoleMethod](`[${level.toUpperCase()}] ${action}:`, details)

  try {
    const logs = await readLogs()
    logs.push(entry)
    await writeLogs(logs)
  } catch (error) {
    console.error('Failed to persist log:', error)
  }
}

// Convenience methods
export const logger = {
  info: (action: string, details?: Record<string, unknown>, options?: { galleryId?: string; userId?: string }) =>
    log('info', action, details, options),

  warn: (action: string, details?: Record<string, unknown>, options?: { galleryId?: string; userId?: string }) =>
    log('warn', action, details, options),

  error: (action: string, error: unknown, details?: Record<string, unknown>, options?: { galleryId?: string }) =>
    log('error', action, details, { ...options, error: error instanceof Error ? error.message : String(error) }),

  success: (action: string, details?: Record<string, unknown>, options?: { galleryId?: string; userId?: string }) =>
    log('success', action, details, options),
}

/**
 * Get logs for a specific date (for admin viewing)
 */
export async function getLogs(date?: string): Promise<LogEntry[]> {
  return readLogs(date)
}

/**
 * Get logs for the last N days
 */
export async function getRecentLogs(days: number = 7): Promise<Record<string, LogEntry[]>> {
  const results: Record<string, LogEntry[]> = {}

  for (let i = 0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const dateKey = date.toISOString().split('T')[0]

    try {
      results[dateKey] = await readLogs(dateKey)
    } catch {
      results[dateKey] = []
    }
  }

  return results
}
