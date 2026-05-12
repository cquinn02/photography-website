#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')

const PLACE_ID = 'ChIJGdPZYW-fLIcRC6A4acSX5Q8'
const REVIEWS_FILE = path.join(REPO_ROOT, 'content', 'google-reviews.json')

const API_KEY = process.env.GOOGLE_PLACES_API_KEY
if (!API_KEY) {
  console.error('Missing GOOGLE_PLACES_API_KEY env var')
  process.exit(1)
}

const STAR_RATING_MAP = {
  1: 'ONE',
  2: 'TWO',
  3: 'THREE',
  4: 'FOUR',
  5: 'FIVE',
}

async function fetchPlaceWithReviews() {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`
  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': 'id,displayName,reviews',
    },
  })
  if (!res.ok) {
    throw new Error(`Places API ${res.status}: ${await res.text()}`)
  }
  return res.json()
}

function normalize(s) {
  return (s || '').toLowerCase().replace(/\s+/g, ' ').trim().slice(0, 100)
}

function isAlreadyInFile(existing, apiReview) {
  const apiName = apiReview.authorAttribution?.displayName || ''
  const apiText = apiReview.text?.text || apiReview.originalText?.text || ''
  return existing.some(e =>
    e.reviewer?.displayName === apiName &&
    normalize(e.comment) === normalize(apiText)
  )
}

function mapToLegacySchema(placesReview) {
  // Omit reviewReply entirely. Cindy can add her reply manually later by
  // editing the JSON entry and inserting `"reviewReply": { "comment": "...",
  // "updateTime": "..." }`. The /reviews page renders cards without a reply
  // just fine.
  return {
    reviewer: {
      displayName: placesReview.authorAttribution?.displayName || 'Unknown',
    },
    starRating: STAR_RATING_MAP[placesReview.rating] || 'FIVE',
    comment: placesReview.text?.text || placesReview.originalText?.text || '',
    createTime: placesReview.publishTime,
    updateTime: placesReview.publishTime,
    name: placesReview.name || `places/manual/${Date.now()}`,
  }
}

async function main() {
  console.log('[recent-reviews] fetching reviews from Places API...')
  const data = await fetchPlaceWithReviews()
  const apiReviews = data.reviews || []
  console.log(`[recent-reviews] API returned ${apiReviews.length} review${apiReviews.length === 1 ? '' : 's'}`)

  if (apiReviews.length === 0) {
    console.log('[recent-reviews] No reviews returned. Check field mask or API permissions.')
    return
  }

  const existing = JSON.parse(await fs.readFile(REVIEWS_FILE, 'utf8'))
  console.log(`[recent-reviews] existing file has ${existing.length} reviews`)

  const newReviews = []
  const skipped = []
  for (const apiReview of apiReviews) {
    const name = apiReview.authorAttribution?.displayName || '?'
    if (isAlreadyInFile(existing, apiReview)) {
      skipped.push(name)
    } else {
      newReviews.push(mapToLegacySchema(apiReview))
    }
  }

  console.log(`[recent-reviews] skipped (already in file): ${skipped.join(', ') || '(none)'}`)

  if (newReviews.length === 0) {
    console.log('[recent-reviews] nothing new to add.')
    return
  }

  // Newest first
  newReviews.sort((a, b) => b.createTime.localeCompare(a.createTime))
  const updated = [...newReviews, ...existing]

  await fs.writeFile(REVIEWS_FILE, JSON.stringify(updated, null, 2) + '\n', 'utf8')

  console.log('')
  console.log(`[recent-reviews] added ${newReviews.length} new review(s):`)
  for (const r of newReviews) {
    console.log(`  • ${r.reviewer.displayName} (${r.createTime.slice(0, 10)}): "${r.comment.slice(0, 70)}..."`)
  }
  console.log('')
  console.log(`[recent-reviews] file now has ${updated.length} reviews total`)
  console.log('')
  console.log('💡 New review entries have no reviewReply field. To add your reply later,')
  console.log('   edit content/google-reviews.json and insert:')
  console.log('     "reviewReply": { "comment": "Your reply", "updateTime": "ISO-8601" }')
}

main().catch((err) => {
  console.error('[recent-reviews] FAILED:', err.message)
  process.exit(1)
})
