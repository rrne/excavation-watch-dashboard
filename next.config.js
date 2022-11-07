/** @type {import('next').NextConfig} */

const withImages = require('next-images');
const withLess = require("next-with-less");

const nextConfig = withImages(
  withLess({
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
  }))

module.exports = nextConfig
