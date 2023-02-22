/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTRACT_ADDRESS: "0x4bDd246a240FB5db82Bd29B1b8067280bfDf3856",
    NETWORK: 0x5,
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  images: {
    loader: "akamai",
    path: " ",
  },
};

module.exports = nextConfig;
