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
  async headers() {
    return [
      {
        // Force iOS to show the single "Add Event" sheet instead of
        // "Subscribe to Calendar" by serving .ics files as a download.
        source: "/events/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="linksi-2.0-rollout.ics"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
