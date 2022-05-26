/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NFT_CA: process.env.NFT_CA,
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
