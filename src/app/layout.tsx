import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
import { Link } from "@/app/components/ui/Link";
import DifficultyProvider from "@/app/context/DifficultyContext";
import { nunito, roboto, robotoCondensed, vt323 } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { ShoppingCart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CYOBot",
	description:
		"Best platform to master robotics! Engineering doesn’t have to be that hard. Advance your career in 6 months!",
	icons: {
		icon: "/favicon-cyobot.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-55J9KR83" />
			<body
				className={`bg-brand-dark-2 ${nunito.variable} ${vt323.variable} ${roboto.variable} ${robotoCondensed.variable}`}
			>
				<Navbar />
				<DifficultyProvider>{children}</DifficultyProvider>
				<Link
					className="rounded-full text-white bottom-3 right-3 sm:bottom-5 sm:right-5 z-10 fixed flex justify-center items-center"
					variant={"positive"}
					size={"icon"}
					aria-label="Shop CYOBot products at Shopify"
					href="https://cyobot.myshopify.com/"
					target="_blank"
				>
					<ShoppingCart />
				</Link>
				<Footer />
			</body>
		</html>
	);
}
