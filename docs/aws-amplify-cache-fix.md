# AWS Amplify Cache Headers Fix

## Problem
PageSpeed Insights shows images and assets are only being cached for **5 seconds**, despite next.config.js setting 1-year cache headers.

## Root Cause
AWS Amplify is overriding the cache headers from Next.js configuration.

## Solution
You need to configure custom headers in AWS Amplify Console.

### Steps to Fix:

1. **Log into AWS Amplify Console**
   - Go to https://console.aws.amazon.com/amplify
   - Select your app: `photography-website`

2. **Navigate to Hosting Settings**
   - Click on "Hosting" in the left sidebar
   - Click on "Rewrites and redirects"

3. **Add Custom Headers**
   - Scroll down to "Custom Headers" section
   - Click "Manage custom headers"
   - Add the following configuration:

```json
{
  "customHeaders": [
    {
      "pattern": "/images/**",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "pattern": "/_next/static/**",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "pattern": "/_next/image**",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "pattern": "/fonts/**",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

4. **Save and Redeploy**
   - Click "Save"
   - Trigger a new deployment or wait for next automatic deployment
   - Headers will take effect on the new deployment

## Expected Results
- Images cached for 1 year (31536000 seconds)
- **Save 175 KiB** on repeat visits (PageSpeed identified)
- Faster page loads for returning visitors
- Better PageSpeed Insights score

## Verification
After deployment, check response headers:
```bash
curl -I https://www.cmqheadshots.com/images/website%20media/grey%20linen-background.jpg
```

You should see:
```
Cache-Control: public, max-age=31536000, immutable
```

Instead of:
```
Cache-Control: public, max-age=5
```

## Impact on Performance
- **Immediate**: 175 KiB savings on repeat page loads
- **Long-term**: Better user experience for returning visitors
- **SEO**: Improved PageSpeed score contributes to better rankings
