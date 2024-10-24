/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
				pathname: "/api/media/**",
			},
			{
				protocol: "https",
				hostname: "quest.cybobot.com",
				pathname: "/api/media/**",
			},
		],
	},
};

export default nextConfig;
