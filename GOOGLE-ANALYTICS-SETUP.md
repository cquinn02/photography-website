# Google Analytics Setup Instructions

## 1. Get your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Create a new property for your website or use an existing one
4. Navigate to **Admin** → **Data Streams** → **Web**
5. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

## 2. Add the Measurement ID to AWS Amplify

### For Production:
1. Go to your AWS Amplify Console
2. Select your app
3. Go to **App settings** → **Environment variables**
4. Click **Manage variables**
5. Add a new variable:
   - **Key**: `NEXT_PUBLIC_GA_ID`
   - **Value**: Your Measurement ID (e.g., `G-XXXXXXXXXX`)
6. Click **Save**
7. Redeploy your app

### For Local Development (Optional):
1. Create a `.env.local` file in the root directory (it's already in .gitignore)
2. Add this line:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Restart your dev server

## 3. Verify It's Working

After deployment:
1. Visit your live website
2. Open Google Analytics in real-time view
3. You should see your visit appear within 30 seconds

## Features Included

✅ Page view tracking on all pages
✅ Automatic path tracking on navigation
✅ Only loads when NEXT_PUBLIC_GA_ID is set (safe for development)
✅ GDPR-friendly (no tracking until ID is configured)

## Notes

- The Google Analytics code will **not** load in development unless you set the environment variable
- Make sure to update your Privacy Policy to mention Google Analytics tracking
- Consider adding a cookie consent banner if required by your jurisdiction
