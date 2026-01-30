/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/zion-flamekeepers-website',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Keeping this as per your previous config
  },
}

export default nextConfig