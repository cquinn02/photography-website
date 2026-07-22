#!/usr/bin/env node
// Readable rankings report from the 312 Elements (AiSEO) API.
// Pulls all tracked keywords for the primary market and summarizes:
// #1s, biggest gains/drops (30d), and page-2 opportunities.
//
// Usage:  node scripts/three12-rankings.mjs
//
import fs from 'node:fs'
import path from 'node:path'

const BASE = 'https://seo.312elements.com'

function loadKey() {
  if (process.env.THREE12_API_KEY) return process.env.THREE12_API_KEY
  const p = path.join(process.cwd(), '.env.local')
  if (fs.existsSync(p)) {
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*THREE12_API_KEY\s*=\s*(.+?)\s*$/)
      if (m) return m[1].replace(/^["']|["']$/g, '')
    }
  }
  return null
}

const KEY = loadKey()
if (!KEY) { console.error('Missing THREE12_API_KEY (.env.local)'); process.exit(1) }

async function get(p) {
  const res = await fetch(BASE + p, {
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
  })
  if (!res.ok) { console.error(`HTTP ${res.status} on ${p}`); process.exit(1) }
  return res.json()
}

const pad = (s, n) => String(s).padEnd(n)
const lpad = (s, n) => String(s).padStart(n)
const shortUrl = u => (u || '').replace(/^https?:\/\/[^/]+/, '') || '/'

const [market, kw] = await Promise.all([
  get('/api/v1/markets'),
  get('/api/v1/keywords?limit=100'),
])

const m = market.data?.primary
const rows = (kw.data || []).filter(k => k.currentPosition != null)
const fetched = rows.map(k => k.lastFetchedAt).sort().pop()?.slice(0, 10) || '—'

const at1 = rows.filter(k => k.currentPosition === 1)
const top3 = rows.filter(k => k.currentPosition <= 3).length
const top10 = rows.filter(k => k.currentPosition <= 10).length
const avg = (rows.reduce((s, k) => s + k.currentPosition, 0) / rows.length).toFixed(1)

// positionChange30d: negative = improved (moved to a better/lower number)
const gains = rows.filter(k => k.positionChange30d < 0).sort((a, b) => a.positionChange30d - b.positionChange30d)
const drops = rows.filter(k => k.positionChange30d > 0).sort((a, b) => b.positionChange30d - a.positionChange30d)
const page2 = rows.filter(k => k.currentPosition >= 11 && k.currentPosition <= 20).sort((a, b) => a.currentPosition - b.currentPosition)

console.log(`\n312 Elements — Rankings Report for cmqheadshots.com`)
console.log(`Market: ${m ? `${m.city}, ${m.state}` : '—'}  ·  312 last fetched: ${fetched}  ·  ${rows.length} keywords tracked`)
console.log(`Summary: ${at1.length} at #1 · ${top3} in top 3 · ${top10} in top 10 · avg position ${avg}\n`)

console.log(`🥇 Ranked #1 (${at1.length})`)
at1.forEach(k => console.log(`   ${pad(k.phrase, 44)} ${shortUrl(k.url)}`))

console.log(`\n📈 Biggest gains, last 30d (${gains.length})`)
if (!gains.length) console.log('   (none)')
gains.slice(0, 10).forEach(k =>
  console.log(`   ${lpad('▲' + Math.abs(k.positionChange30d), 4)}  ${pad(k.phrase, 44)} ${k.currentPosition - k.positionChange30d} → ${k.currentPosition}`))

console.log(`\n📉 Drops, last 30d (${drops.length})`)
if (!drops.length) console.log('   (none)')
drops.slice(0, 10).forEach(k =>
  console.log(`   ${lpad('▼' + k.positionChange30d, 4)}  ${pad(k.phrase, 44)} ${k.currentPosition - k.positionChange30d} → ${k.currentPosition}`))

console.log(`\n🎯 Page-2 opportunities, #11–20 (${page2.length})`)
if (!page2.length) console.log('   (none)')
page2.forEach(k => console.log(`   ${lpad('#' + k.currentPosition, 4)}  ${pad(k.phrase, 44)} ${shortUrl(k.url)}`))
console.log('')
