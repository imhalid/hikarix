/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'images.unsplash.com',
      }
    ]
  }
}

module.exports = nextConfig
