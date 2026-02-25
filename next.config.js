/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ignore ESLint during builds (client gallery uses different lint config)
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header to reduce HTML
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Reduce memory usage by optimizing common imports
    optimizePackageImports: ['lucide-react'],
    // Increase body size limit for file uploads
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
  // Better error handling and memory management
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,      // Keep pages in memory for 1 minute
    pagesBufferLength: 5,           // Limit concurrent page compilation
  },
  // Optimize images to reduce HTML overhead
  images: {
    formats: ['image/webp', 'image/avif'],
    // Add mobile-optimized breakpoints for better image sizing (360px, 412px, 512px)
    deviceSizes: [360, 412, 512, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache optimized images for 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allow images from S3 bucket for client galleries and website images via CloudFront
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cmqheadshots-galleries.s3.us-east-1.amazonaws.com',
      },
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
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
      // Prevent search engines from indexing admin, gallery, and proofs pages
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/admin',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/gallery/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/proofs/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
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
      {
        source: '/pricing',
        destination: '/pricing-individual',
        permanent: true,
      },
      {
        source: '/headshot-types',
        destination: '/',
        permanent: true,
      },
      {
        source: '/phoenix-business-headshot-rates-2',
        destination: '/pricing-individual',
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
        destination: '/contactus',
        statusCode: 301,
      },
      {
        source: '/Contact',
        destination: '/contactus',
        statusCode: 301,
      },
      // Old WordPress URLs - 301 redirects
      {
        source: '/aphoenix-actor-headshot-rates',
        destination: '/pricing-actor',
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
        destination: '/pricing-individual',
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
        destination: '/pricing-individual',
        permanent: true,
      },
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig