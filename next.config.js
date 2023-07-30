/* eslint-disable @typescript-eslint/no-var-requires */
const withPreact = require('next-plugin-preact');
const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = withPWA(withPreact(nextConfig));
