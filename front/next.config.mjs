/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/admin/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'admin.localhost',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
