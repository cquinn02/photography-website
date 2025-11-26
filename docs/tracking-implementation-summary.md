# Google Analytics Tracking Implementation Summary

## What I've Done

### 1. Created Tracking Utility (`/src/utils/analytics.ts`)
This file contains helper functions for tracking different types of user interactions:
- `trackButtonClick()` - For tracking button clicks
- `trackImageClick()` - For tracking image interactions
- `trackLinkClick()` - For tracking link clicks
- `trackFormSubmit()` - For tracking form submissions

### 2. Updated GetPricingButton Component (`/src/components/GetPricingButton.tsx`)
- Added `trackingLabel` prop
- Automatically tracks clicks when label is provided
- Works for both links and buttons

### 3. Added Example Tracking to Homepage (`/src/pages/index.tsx`)
Updated the three hero section buttons with tracking labels:
- **"INDIVIDUAL RATES"**: `individual_rates_home_hero`
- **"ON-LOCATION STAFF/TEAM"**: `staff_team_home_hero`
- **"ACTOR RATES"**: `actor_rates_home_hero`

### 4. Created Comprehensive Guide (`/docs/google-analytics-tracking-guide.md`)
Full documentation with examples for tracking everything on your site.

## Testing Your Setup

1. **Start your dev server** (if not running):
   ```bash
   pnpm dev
   ```

2. **Open** http://localhost:3100 in Chrome

3. **Open Developer Console** (press F12 or Cmd+Option+I)

4. **Click one of the three buttons** in the hero section

5. **Look for this in the console**:
   ```
   📊 GA Event: { action: 'click', category: 'button', label: 'individual_rates_home_hero_to_/pricing-individual' }
   ```

If you see that, tracking is working! ✅

## What You Need to Do Next

### Priority 1: Add tracking to all GetPricingButton instances

Find all `<GetPricingButton>` components across your site and add the `trackingLabel` prop.

**Example Search:**
```bash
grep -r "GetPricingButton" src/pages --include="*.tsx"
```

### Priority 2: Track images (if needed)

If you want to track which images users click on, wrap them with tracking:

```tsx
import { trackImageClick } from '@/utils/analytics'

<div onClick={() => trackImageClick('portfolio_corporate_1')}>
  <Image src="/images/photo.jpg" alt="Photo" />
</div>
```

### Priority 3: Track footer and header links

Add tracking to navigation, footer links, phone numbers, and email addresses.

**See examples in:** `/docs/google-analytics-tracking-guide.md`

## Naming Convention Reference

Format: `{what}_{page}_{location}`

### Examples:
- `pricing_home_hero` - Pricing button in homepage hero
- `contact_footer` - Contact link in footer
- `phone_header` - Phone number in header
- `portfolio_nav` - Portfolio link in navigation
- `book_now_sticky` - Book Now in sticky bottom bar

## Files Created/Modified

### Created:
- ✅ `/src/utils/analytics.ts` - Tracking utility functions
- ✅ `/docs/google-analytics-tracking-guide.md` - Complete implementation guide
- ✅ `/docs/tracking-implementation-summary.md` - This file

### Modified:
- ✅ `/src/components/GetPricingButton.tsx` - Added tracking support
- ✅ `/src/pages/index.tsx` - Added tracking to hero buttons (example)

## Viewing Results in Google Analytics

**Note:** You need to wait 24-48 hours for data to appear in Google Analytics after deploying to production.

1. Go to Google Analytics 4
2. Navigate to **Reports** → **Engagement** → **Events**
3. Look for the `click` event
4. Click on it to see which labels (buttons) were clicked

## Common Questions

**Q: Do I need to track EVERY button?**
A: Yes, track all buttons so you know what users are clicking on.

**Q: Do I need to track EVERY image?**
A: Only if the images are clickable or you want to know which ones users interact with.

**Q: Will this slow down my website?**
A: No, event tracking is very lightweight and happens asynchronously.

**Q: Why don't I see events in Google Analytics yet?**
A: Data takes 24-48 hours to appear. Also, make sure you've deployed to production (not just localhost).

## Next Steps

1. ✅ Test the homepage buttons (done above)
2. Add tracking to remaining buttons across your site
3. Add tracking to footer/header links
4. Deploy to production
5. Wait 24-48 hours
6. Check Google Analytics for results

Need help? Refer to `/docs/google-analytics-tracking-guide.md` for detailed examples!
