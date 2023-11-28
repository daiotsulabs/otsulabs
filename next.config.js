/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/vi/careers/:id*',
        destination: '/careers/:id*',
      },
    ];
  },
};

module.exports = nextConfig;
