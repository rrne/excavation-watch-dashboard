/** @type {import('next').NextConfig} */

const withLess = require('next-with-less')
const withImages = require('next-images');

const nextConfig = withImages(
   withLess({
    images: {
      disableStaticImages: true,
    },
    trailingSlash: true, 
    // useFileSystemPublicRoutes: false, 
    reactStrictMode: true,
    swcMinify: true,
    compiler:{
      styledComponents:true
    }
  })
)

module.exports = nextConfig
