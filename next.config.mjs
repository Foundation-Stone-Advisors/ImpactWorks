/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/partners", destination: "/providers", permanent: true },
    ];
  },
};

export default nextConfig;
