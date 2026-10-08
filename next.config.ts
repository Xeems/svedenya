import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.163', 'nii-kpg.ru', 'www.nii-kpg.ru'],
  basePath: '/sveden',
  assetPrefix: '/sveden',
  //trailingSlash: true,
  //distDir: 'build'
  serverExternalPackages: ['winston-syslog'],
  logging: {
    incomingRequests: false, // ПОЛНОСТЬЮ убирает спам вида "GET /document 200..."
    //browserToTerminal: "error"
  },
};

export default nextConfig;
