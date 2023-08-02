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
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'none'; script-src 'self'; script-src-elem 'self'; script-src-attr 'self'; style-src 'self' 'unsafe-inline' https://fonts.gstatic.com; img-src 'self' data:; font-src https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content",
          },
          {
            key: 'Content-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Origin-Agent-Cluster',
            value: '?1',
          },
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off',
          },
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'X-XSS-Protection',
            value: '0',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'packing.joshthewanderer.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'false',
          },
        ],
      },
    ];
  },
};

module.exports = withPWA(withPreact(nextConfig));
