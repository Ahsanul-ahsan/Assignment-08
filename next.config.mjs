/** @type {import('next').NextConfig} */

const nextConfig = {
 
/* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all HTTPS domains
      },
      {
        protocol: "http",
        hostname: "**", // allow all HTTP domains (optional)
      },
    ],
  },

  reactCompiler: true,
};

export default nextConfig;

