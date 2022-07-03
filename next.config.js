const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import 'styles/_variables.scss';`
  }
}

module.exports = nextConfig
