/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "culture.seoul.go.kr",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
