/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const nextConfig = withImages({
    images: {
      disableStaticImages: true,
    },
    trailingSlash: true, 
    // useFileSystemPublicRoutes: false, 
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      emotion: true,
    },
  })

module.exports = nextConfig
