/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias["~"] = __dirname;
    return config;
  },
  pageExtensions: ["tsx"],
  pagesDir: "src/pages",
};

module.exports = nextConfig;
