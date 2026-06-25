#!/usr/bin/env node
// Minimal client for the 312 Elements "AiSEO v1 Client API".
// Reads THREE12_API_KEY from the environment or .env.local (gitignored).
// Spec: docs/312elements-openapi.json  ·  Base: https://seo.312elements.com
//
// Usage:
//   node scripts/three12.mjs <path> [key=value ...]
// Examples:
//   node scripts/three12.mjs /api/v1/markets
//   node scripts/three12.mjs /api/v1/keywords market_id=123 limit=20
//
import fs from 'node:fs'
import path from 'node:path'

const BASE = 'https://seo.312elements.com'

// --- load THREE12_API_KEY (env wins; otherwise parse .env.local) ---
function loadKey() {
  if (process.env.THREE12_API_KEY) return process.env.THREE12_API_KEY
  const envPath = path.join(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^\s*THREE12_API_KEY\s*=\s*(.+?)\s*$/)
      if (m) return m[1].replace(/^["']|["']$/g, '')
    }
  }
  return null
}

const KEY = loadKey()
if (!KEY) {
  console.error('Missing THREE12_API_KEY (set it in .env.local or the environment).')
  process.exit(1)
}

// --- args: first non-key=val arg is the path; key=val pairs become query ---
const args = process.argv.slice(2)
let reqPath = args.find(a => !a.includes('=')) || '/api/v1/markets'
if (!reqPath.startsWith('/')) reqPath = '/' + reqPath

const query = new URLSearchParams()
for (const a of args) {
  if (a.includes('=')) {
    const i = a.indexOf('=')
    query.append(a.slice(0, i), a.slice(i + 1))
  }
}
const url = BASE + reqPath + (query.toString() ? '?' + query.toString() : '')

const res = await fetch(url, {
  headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
})

const remaining = res.headers.get('x-ratelimit-remaining')
console.error(`GET ${reqPath}  →  HTTP ${res.status}` + (remaining ? `  (rate limit left: ${remaining})` : ''))

const text = await res.text()
try {
  console.log(JSON.stringify(JSON.parse(text), null, 2))
} catch {
  console.log(text)
}
process.exit(res.ok ? 0 : 1)
