import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export const s3Client = new S3Client({
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
})

export const BUCKET_NAME = process.env.S3_BUCKET!

// Upload a file to S3
export async function uploadToS3(
  file: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  })

  await s3Client.send(command)

  return `https://${BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/${key}`
}

// Delete a file from S3
export async function deleteFromS3(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  })

  await s3Client.send(command)
}

// Get a presigned URL for downloading (expires in 1 hour by default)
export async function getPresignedDownloadUrl(
  key: string,
  expiresIn: number = 3600
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  })

  return await getSignedUrl(s3Client, command, { expiresIn })
}

// Get a presigned URL for uploading (expires in 15 minutes by default)
export async function getPresignedUploadUrl(
  key: string,
  contentType: string,
  expiresIn: number = 900
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  })

  return await getSignedUrl(s3Client, command, { expiresIn })
}

// Extract the S3 key from a full S3 URL
export function getKeyFromUrl(url: string): string {
  const urlObj = new URL(url)
  return urlObj.pathname.slice(1) // Remove leading slash
}

// Download a file from S3 as a buffer
export async function downloadFromS3(key: string): Promise<Buffer> {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  })

  const response = await s3Client.send(command)
  const stream = response.Body as NodeJS.ReadableStream
  const chunks: Buffer[] = []

  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk))
  }

  return Buffer.concat(chunks)
}
