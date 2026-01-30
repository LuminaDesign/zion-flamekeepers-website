/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/zion-flamekeepers-website',
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