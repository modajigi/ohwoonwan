/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY,
    API_PORT: process.env.NEXT_PUBLIC_API_PORT,
  },
};

export default nextConfig;
