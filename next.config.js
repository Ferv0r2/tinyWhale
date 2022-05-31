/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";
const assetPrefix = isProd ? "https://typescontents.shop" : "";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  images: {
    loader: "akamai",
    path: "",
  },
  env: {
    NFT_CA: process.env.NFT_CA,
    ITEM_CA: process.env.ITEM_CA,
    BOX_CA: process.env.BOX_CA,
    MINING_CA: process.env.MINING_CA,
  },
};

module.exports = nextConfig;
