/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["myawsbucketset.s3.ap-northeast-2.amazonaws.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER: process.env.HOST,
    WEBSOCKET: process.env.WEBSOCKET,
  },
};

module.exports = nextConfig;
