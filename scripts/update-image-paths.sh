#!/bin/bash

# Batch update all non-WebP image paths to optimized WebP versions

cd "/Users/cindyquinn/my website/photography-website"

# Blog images
find src/pages/blog -type f -name "*.tsx" -exec sed -i '' \
  -e 's|/images/blog/clothing-for-headshots-prep\.jpg|/images/blog/optimized/clothing-for-headshots-prep-optimized.webp|g' \
  -e 's|/images/blog/horizontal-headshots-main\.jpg|/images/blog/optimized/horizontal-headshots-main-optimized.webp|g' \
  -e 's|/images/blog/makeup-headshot-main\.jpg|/images/blog/optimized/makeup-headshot-main-optimized.webp|g' \
  -e 's|/images/blog/photoshop-main\.jpg|/images/blog/optimized/photoshop-main-optimized.webp|g' \
  -e 's|/images/blog/Prepare590398367-1600\.jpg|/images/blog/optimized/Prepare590398367-1600-optimized.webp|g' \
  -e 's|/images/blog/why-hire-professional-main\.jpg|/images/blog/optimized/why-hire-professional-main-optimized.webp|g' \
  {} \;

# Privacy policy and terms (old logo)
find src/pages -type f \( -name "privacy-policy.tsx" -o -name "terms-and-conditions.tsx" \) -exec sed -i '' \
  -e 's|/images/old logos /White transparent\.png|/images/website media/optimized/Icon-documentation-video-women-optimized.webp|g' \
  {} \;

# Component files
find src/components -type f -name "*.tsx" -exec sed -i '' \
  -e 's|/images/website media/Icon of documentation and video and a women\.png|/images/website media/optimized/Icon-documentation-video-women-optimized.webp|g' \
  {} \;

echo "✅ All image paths have been updated to WebP format!"
