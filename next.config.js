/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true

  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}

module.exports = nextConfig
