/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/in-house-designs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
