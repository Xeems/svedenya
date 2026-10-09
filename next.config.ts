import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.163', 'nii-kpg.ru', 'www.nii-kpg.ru'],
  basePath: '/sveden',
  assetPrefix: '/sveden',
  serverExternalPackages: ['winston-syslog'],
  logging: {
    incomingRequests: false, // ПОЛНОСТЬЮ убирает спам вида "GET /document 200..."
  },
  async redirects() {
    return [
      {
        source: '/', // /sveden и /sveden/
        destination: '/common', // /sveden/common
        permanent: true, // 307 временный редирект (поменяйте на true для 308, если навсегда)
      },
    ]
  },
};

export default nextConfig;
