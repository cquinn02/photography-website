/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header to reduce HTML
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Reduce memory usage by optimizing common imports
    optimizePackageImports: ['lucide-react'],
  },
  // Better error handling and memory management
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,      // Keep pages in memory for 1 minute
    pagesBufferLength: 5,           // Limit concurrent page compilation
  },
  // Optimize images to reduce HTML overhead
  images: {
    formats: ['image/webp', 'image/avif'],
    // Reduced from 9 to 6 breakpoints to cut HTML size (~30% fewer srcSet entries per image)
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [32, 64, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache optimized images for 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allow images from CloudFront CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.cmqheadshots.com',
      },
    ],
  },
  // Security headers and cache optimization
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cmqheadshots.as.me https://537178.17hats.com https://matomo.martyquinn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://images.cmqheadshots.com https://cmqheadshots-website-images.s3.us-east-1.amazonaws.com https://www.google-analytics.com https://matomo.martyquinn.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://matomo.martyquinn.com; frame-src 'self' https://cmqheadshots.as.me https://537178.17hats.com https://www.googletagmanager.com; frame-ancestors 'self';"
          }
        ],
      },
      // Cache static images for 1 year
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache Next.js static assets for 1 year
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache fonts for 1 year
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Redirects for SEO - fix 404 errors
  async redirects() {
    return [
      // pricing-individual renamed to phoenix-business-headshots
      {
        source: '/pricing-individual',
        destination: '/phoenix-business-headshots',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/phoenix-business-headshots',
        permanent: true,
      },
      {
        source: '/headshot-types',
        destination: '/',
        permanent: true,
      },
      {
        source: '/phoenix-business-headshot-rates-2',
        destination: '/phoenix-business-headshots',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/privacy-policy-2',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/Contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/contactus',
        destination: '/contact-us',
        permanent: true,
      },
      // pricing-actor renamed to actor-headshots-phoenix
      {
        source: '/pricing-actor',
        destination: '/actor-headshots-phoenix',
        permanent: true,
      },
      // Old WordPress URLs - 301 redirects
      {
        source: '/aphoenix-actor-headshot-rates',
        destination: '/actor-headshots-phoenix',
        permanent: true,
      },
      {
        source: '/corporate-or-group-headshots',
        destination: '/corporate-staff-headshots',
        permanent: true,
      },
      {
        source: '/dress-to-impress-mens-headshot-fashion-tips-for-business-success',
        destination: '/blog/dress-to-impress-mens-headshot-fashion-tips-for-business-success',
        permanent: true,
      },
      {
        source: '/for-men-what-kind-of-clothing-and-prep-should-i-wear-for-my-headshot-session',
        destination: '/blog/what-to-wear-to-your-headshot-session',
        permanent: true,
      },
      {
        source: '/phoenix-business-headshot-rates',
        destination: '/phoenix-business-headshots',
        permanent: true,
      },
      {
        source: '/make-up',
        destination: '/blog/what-kind-of-makeup-should-i-wear-to-my-headshot-session',
        permanent: true,
      },
      {
        source: '/author/siteground',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: '/phoenix-business-headshots',
        permanent: true,
      },
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/admin/:path*',
        destination: '/contact-us',
        permanent: true,
      },
      // Old long blog URL renamed to shorter SEO-friendly slug
      {
        source: '/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women',
        destination: '/blog/womens-headshot-clothing-guide',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig