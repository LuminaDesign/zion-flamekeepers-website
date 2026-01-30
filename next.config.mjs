/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/zion-flamekeepers-website' : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Keeping this as per your previous config
  },
  turbopack: {
    root: './',
  },
}

export default nextConfig