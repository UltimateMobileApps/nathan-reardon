import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configure formats for better compression
    formats: ['image/webp', 'image/avif'],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Redirect www to non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nathanreardon.com',
          },
        ],
        destination: 'https://nathanreardon.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
