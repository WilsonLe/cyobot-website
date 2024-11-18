"use client";
import styles from "@/app/components/navbar/link.module.css";
import { Button } from "@/app/components/ui/Button";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useState } from "react";

export default function DesktopNavBar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	const handleGTMEvent = (eventName: string, label: string) => {
		sendGTMEvent({
			event: "link_click",
			category: "Desktop NavBar",
			action: eventName,
			label,
		});
	};

	return (
		<div className="text-lg lg:text-xl xl:text-2xl font-roboto w-[95%] lg:flex hidden items-center justify-between mr-12">
			<ul className="flex justify-around">
				<li
					onFocus={() => setIsDropdownOpen(false)}
					className={styles["nav-link"]}
				>
					<Link href="/about">About</Link>
				</li>
				<li
					onFocus={() => setIsDropdownOpen(true)}
					onMouseEnter={() => setIsDropdownOpen(true)}
					onMouseLeave={() => setIsDropdownOpen(false)}
					tabIndex={0}
					className={styles["nav-link"]}
				>
					<span>Resources</span>
					<div
						onMouseEnter={() => setIsDropdownOpen(true)}
						className={`px-5 h-32 w-44 items-center justify-items-start grid grid-cols-1 text-center absolute mt-2 bg-brand-dark rounded-md shadow-lg z-20 transition-all ${
							isDropdownOpen ? "animate-slideDown" : "animate-slideUp hidden"
						}`}
					>
						<Link
							className="hover:text-brand-green w-full text-start"
							href={
								"https://cyobot.notion.site/a845040ff7484627a544b4d025d32f9d?v=201e9cd408014c6cad27ed2f8226b786"
							}
							target="_blank"
						>
							Wiki
						</Link>
						<Link
							className="hover:text-brand-green w-full text-start"
							href="/downloads"
						>
							Downloads
						</Link>
						<Link
							className="hover:text-brand-green w-full text-start"
							href="/faq"
						>
							FAQ
						</Link>
					</div>
				</li>
				<li
					onFocus={() => setIsDropdownOpen(false)}
					className={styles["nav-link"]}
				>
					<Link href="/blog/1">Blog</Link>
				</li>
				<li className={styles["nav-link"]}>
					<Link href="/contact-us">Contact Us</Link>
				</li>
			</ul>
			<Button
				size="lg"
				variant={"shadow"}
				className="md:text-xl xl:text-2xl text-brand-purple font-roboto font-medium"
				onClick={() => {
					handleGTMEvent("Navigate", "Shop");
					window.open("https://cyobot.myshopify.com", "_blank");
				}}
			>
				Shop
			</Button>
		</div>
	);
}
