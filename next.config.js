/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/imobiliaria-a102f.appspot.com/o/**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "**",
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
