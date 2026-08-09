#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')

const PLACE_ID = 'ChIJGdPZYW-fLIcRC6A4acSX5Q8'
const STATS_FILE = path.join(REPO_ROOT, 'content', 'review-stats.json')

const API_KEY = process.env.GOOGLE_PLACES_API_KEY
if (!API_KEY) {
  console.error('Missing GOOGLE_PLACES_API_KEY env var')
  process.exit(1)
}

const FILES_TO_PATCH = [
  'src/pages/index.tsx',
  'src/pages/about.tsx',
  'src/pages/reviews.tsx',
  'src/pages/actor-headshots-phoenix.tsx',
  'src/pages/corporate-staff-headshots.tsx',
  'src/pages/eras-medical-headshots.tsx',
  'src/pages/linkedin-headshots.tsx',
  'src/pages/modeling-headshots-phoenix.tsx',
  'src/pages/phoenix-business-headshots.tsx',
  'src/pages/realtor-headshots-phoenix.tsx',
  'src/pages/blog/best-professional-headshot-photographers-near-me.tsx',
  'src/components/Layout.tsx',
  'src/components/sections/SplitHero.tsx',
  'content/about.md',
  'public/llms.txt',
]

async function fetchPlaceDetails() {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`
  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount',
    },
  })
  if (!res.ok) {
    throw new Error(`Places API ${res.status}: ${await res.text()}`)
  }
  return res.json()
}

async function readStats() {
  try {
    const text = await fs.readFile(STATS_FILE, 'utf8')
    return JSON.parse(text)
  } catch {
    return null
  }
}

async function writeStats(stats) {
  await fs.writeFile(STATS_FILE, JSON.stringify(stats, null, 2) + '\n', 'utf8')
}

async function patchFile(rel, newCount) {
  const filePath = path.join(REPO_ROOT, rel)
  const before = await fs.readFile(filePath, 'utf8')
  let after = before

  // "133+ five-star" or "131 five-star" → "{count}+ five-star" (lowercase)
  after = after.replace(
    /\b\d{2,4}\+? five-star\b/g,
    `${newCount}+ five-star`
  )
  // "131 Five-Star" or "133+ Five-Star" → "{count}+ Five-Star" (title case)
  after = after.replace(
    /\b\d{2,4}\+? Five-Star\b/g,
    `${newCount}+ Five-Star`
  )
  // Digit form: "133+ 5-star" or "134+ 5 star" → "{count}+ 5-star" / "{count}+ 5 star"
  // (used in some SEO meta descriptions — keep these in sync too)
  after = after.replace(
    /\b\d{2,4}\+? 5-star\b/g,
    `${newCount}+ 5-star`
  )
  after = after.replace(
    /\b\d{2,4}\+? 5 star\b/g,
    `${newCount}+ 5 star`
  )
  // "133+ five-star reviews" already covered above; "133+ five-star" appears in compact descriptions
  // Schema ratingCount → integer
  after = after.replace(
    /"ratingCount":\s*\d+/g,
    `"ratingCount": ${newCount}`
  )

  if (before !== after) {
    await fs.writeFile(filePath, after, 'utf8')
    return true
  }
  return false
}

async function main() {
  console.log(`[review-stats] fetching place ${PLACE_ID}…`)
  const data = await fetchPlaceDetails()
  const newCount = data.userRatingCount
  const newRating = data.rating

  if (typeof newCount !== 'number' || newCount <= 0) {
    throw new Error(`Invalid userRatingCount from API: ${JSON.stringify(data)}`)
  }

  console.log(`[review-stats] google reports ${newCount} reviews, avg ${newRating} stars`)

  const current = await readStats()
  const currentCount = current?.totalReviews

  // Sanity check: refuse to apply if delta is implausibly large
  if (currentCount && newCount < currentCount * 0.5) {
    throw new Error(
      `Refusing update: new count ${newCount} is <50% of current ${currentCount}. Likely API issue.`
    )
  }

  const now = new Date().toISOString()

  if (currentCount === newCount) {
    console.log('[review-stats] no change in count; nothing to commit (workflow logs preserve the run record)')
    return
  }

  console.log(`[review-stats] count changed: ${currentCount ?? '(none)'} → ${newCount}`)

  let filesChanged = 0
  for (const rel of FILES_TO_PATCH) {
    const changed = await patchFile(rel, newCount)
    if (changed) {
      console.log(`  ✓ patched ${rel}`)
      filesChanged++
    }
  }
  console.log(`[review-stats] patched ${filesChanged} of ${FILES_TO_PATCH.length} files`)

  await writeStats({
    totalReviews: newCount,
    averageRating: newRating,
    placeId: PLACE_ID,
    lastFetched: now,
    lastChanged: now,
  })
  console.log('[review-stats] content/review-stats.json updated')
}

main().catch((err) => {
  console.error('[review-stats] FAILED:', err.message)
  process.exit(1)
})
