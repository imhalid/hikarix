/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'image.tmdb.org',
      }
    ]
  }
}

module.exports = nextConfig
