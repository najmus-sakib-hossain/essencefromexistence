import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // React Settings
  reactStrictMode: true,
  
  // Performance & Build Optimizations
  swcMinify: true,
  compress: true,
  
  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Experimental Features
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-icons",
      "lucide-react",
      "date-fns",
      "lodash",
      "recharts",
    ],
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  // Headers for Security & Performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/public/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=43200",
          },
        ],
      },
    ]
  },

  // TypeScript Configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint Configuration
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["app", "components", "lib", "hooks", "config"],
  },

  // Webpack Configuration
  webpack: (config, { isServer }) => {
    // SVG as React Components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    // Fix for "Module not found" errors
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    return config
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Add your redirects here
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ]
  },

  // Rewrites for API routes or external APIs
  async rewrites() {
    return [
      // Add your rewrites here
      // {
      //   source: '/api/:path*',
      //   destination: 'https://api.example.com/:path*',
      // },
    ]
  },

  // Environment Variables
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },

  // Output Configuration (for static export if needed)
  // output: 'export', // Uncomment for static site generation
}

export default nextConfig
