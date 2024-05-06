/** @type {import('next').NextConfig} */

const NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  async redirects() {
    return [{ source: "/api/test", destination: "/", permanent: false }];
  },
};

export default NextConfig;
