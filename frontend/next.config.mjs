/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/admin/:path*',
        destination: 'http://localhost:5000/admin/:path*',
      },
    ];
  },
};

export default nextConfig;
