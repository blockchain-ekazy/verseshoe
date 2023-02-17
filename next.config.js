/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTRACT_ADDRESS: "0x65A3851aBcE850Dad4805fBA51F3A3A313CA04E0",
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
