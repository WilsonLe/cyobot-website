"use client";
import PopupGIF from "@/app/components/ui/popup/PopupGIF";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
	image: {
		src: string;
		staticSrc: string;
		alt: string;
	};
	color: string;
	title: string;
	text?: string;
	className?: string;
	background?: string;
};

export default function Card({
	image,
	color,
	title,
	text,
	className,
	background,
}: CardProps) {
	const [showPopup, setShowPopup] = useState<Boolean>(false);
	let textColor = "#fff";
	if (color === "purple") textColor = "#3e2486";

	const handleClick = () => {
		setShowPopup(true);
	};

	return (
		<>
			<div
				className={`bg-brand-${background} w-full h-auto min-h-80 max-w-60 lg:max-w-80 text-center rounded-md ${className} card-${color}`}
			>
				<figure
					className="relative w-full h-[10rem] lg:h-[12rem] mt-3"
					onClick={handleClick}
				>
					<Image
						src={image.staticSrc}
						alt={image.alt}
						fill
						quality={80}
						sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw"
						style={{ objectFit: "cover" }}
					/>
				</figure>
				<h5
					className={`w-[90%] mx-auto font-roboto font-bold text-lg lg:text-xl mt-3 mb-2`}
					style={{ color: textColor }}
				>
					{title}
				</h5>
				<p className="text-base lg:text-lg font-nunito font-light pb-3 mx-2">
					{text}
				</p>
			</div>
			{showPopup && (
				<PopupGIF
					src={image.src}
					alt={image.alt}
					description={title}
					onClose={() => setShowPopup(false)}
				/>
			)}
		</>
	);
}
