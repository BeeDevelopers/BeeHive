/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  // allow via.placeholder.com to be used as image source
  images: {
    domains: ["via.placeholder.com"],
  },
};
