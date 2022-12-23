/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER: process.env.HOST,
  },
};

module.exports = nextConfig;
