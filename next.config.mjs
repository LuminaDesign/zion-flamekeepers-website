/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/zion-flamekeepers-website',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
