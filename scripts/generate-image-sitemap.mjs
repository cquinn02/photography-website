#!/usr/bin/env node
// Generates public/image-sitemap.xml by crawling the live pages listed in
// public/sitemap.xml and collecting the RAW CDN image URLs on each page.
//
// Why raw CDN URLs (images.cmqheadshots.com/...) and NOT the /_next/image proxy:
// robots.txt disallows /_next/image, so Google can't crawl the optimized proxy
// URLs the pages render. The raw CDN URLs are crawlable, so those are what we
// list — that's the whole point of the image sitemap for this site.
//
// Usage: node scripts/generate-image-sitemap.mjs
import fs from 'node:fs'
import path from 'node:path'

const CDN_HOST = 'images.cmqheadshots.com'
const SITEMAP = path.join(process.cwd(), 'public', 'sitemap.xml')
const OUT = path.join(process.cwd(), 'public', 'image-sitemap.xml')

const pageUrls = [...fs.readFileSync(SITEMAP, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())

function extractImages(html) {
  const set = new Set()
  // 1) /_next/image?url=<encoded CDN url>&w=... -> decode back to the raw CDN url
  for (const m of html.matchAll(/\/_next\/image\?url=([^&"'\\]+)/g)) {
    try {
      const dec = decodeURIComponent(m[1])
      if (dec.includes(CDN_HOST)) set.add(dec.split('?')[0])
    } catch {}
  }
  // 2) direct CDN image URLs (hero <picture> sources, <link rel=preload>, og:image)
  const re = new RegExp(`https://${CDN_HOST}/[^"'\\s<>)\\\\]+\\.(?:webp|jpe?g|png|gif|avif)`, 'gi')
  for (const m of html.matchAll(re)) set.add(m[0])
  return [...set].sort()
}

const xmlEscape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

const entries = []
let totalImages = 0
for (const url of pageUrls) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'CMQ-ImageSitemap/1.0' } })
    if (!res.ok) {
      console.error(`skip  ${url}  (HTTP ${res.status})`)
      continue
    }
    const imgs = extractImages(await res.text())
    if (!imgs.length) {
      console.error(`none  ${url}`)
      continue
    }
    totalImages += imgs.length
    const imageXml = imgs
      .map((i) => `    <image:image>\n      <image:loc>${xmlEscape(i)}</image:loc>\n    </image:image>`)
      .join('\n')
    entries.push(`  <url>\n    <loc>${xmlEscape(url)}</loc>\n${imageXml}\n  </url>`)
    console.error(`ok    ${url}  (${imgs.length} images)`)
  } catch (e) {
    console.error(`error ${url}  (${e.message})`)
  }
}

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' +
  entries.join('\n') +
  '\n</urlset>\n'

fs.writeFileSync(OUT, xml)
console.error(`\nWrote ${OUT}\n  ${entries.length} pages, ${totalImages} image entries`)
