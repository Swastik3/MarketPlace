/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@mikro-orm'],
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Allow any hostname
          },
        ],
      },
};

export default nextConfig;
