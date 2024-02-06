/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_URL).hostname], // Extracting the hostname from the URL
  },
};

module.exports = nextConfig;
