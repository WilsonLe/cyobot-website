"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import styles from "./link.module.css";

export default function MobileNavBar() {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	const handleGTMEvent = (eventName: string, label: string) => {
		sendGTMEvent({
			event: "link_click",
			category: "Mobile NavBar",
			action: eventName,
			label,
		});
	};

	function handleDrawerToggle() {
		setIsDrawerOpen(!isDrawerOpen);
	}

	return (
		<div className="lg:hidden h-full flex flex-col ml-auto mr-8 justify-center">
			<button
				aria-label="Navigation menu"
				onClick={handleDrawerToggle}
				className="bg-opacity-50 rounded"
			>
				<svg
					className="w-7 h-7"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={
							isDrawerOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
						}
					></path>
				</svg>
			</button>
			<div
				className={
					isDrawerOpen
						? "z-10 lg:hidden absolute top-[4rem] right-0 bottom-0 left-0 flex flex-col justify-start items-center w-full h-screen bg-brand-dark-2 text-white ease-in duration-300"
						: "z-10 lg:hidden absolute top-[4rem] right-0 -left-full flex flex-col justify-start items-center w-full h-screen bg-brand-dark-2 text-white ease-in duration-300"
				}
			>
				<ul className="h-1/2 text-2xl flex flex-col items-center justify-evenly">
					<li
						className={styles["nav-link"]}
						onClick={handleDrawerToggle}
						onFocus={() => setIsDropdownOpen(false)}
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
								onClick={handleDrawerToggle}
							>
								Wiki
							</Link>
							<Link
								className="hover:text-brand-green w-full text-start"
								href="/downloads"
								onClick={handleDrawerToggle}
							>
								Downloads
							</Link>
							<Link
								className="hover:text-brand-green w-full text-start"
								href="/faq"
								onClick={handleDrawerToggle}
							>
								FAQ
							</Link>
						</div>
					</li>
					<li
						className={styles["nav-link"]}
						onClick={handleDrawerToggle}
						onFocus={() => setIsDropdownOpen(false)}
					>
						<Link href="/blog/1">Blog</Link>
					</li>
					<li
						className={styles["nav-link"]}
						onClick={handleDrawerToggle}
						onFocus={() => setIsDropdownOpen(false)}
					>
						<Link href="/contact-us">Contact Us</Link>
					</li>
				</ul>
				<Button
					variant={"shadow"}
					className="px-10 py-5 text-xl xl:text-2x xl:text-2xl text-brand-purple font-roboto font-medium"
					onClick={() => {
						handleGTMEvent("Navigate", "Shop");
						window.open("https://cyobot.myshopify.com", "_blank");
					}}
				>
					Shop
				</Button>
			</div>
		</div>
	);
}
