import Image from "next/image";
import { FC } from "react";

export type TeamImageProps = {
	src: string;
	alt: string;
	icon: string;
};

const TeamImageCard: FC<TeamImageProps> = (props) => {
	return (
		<div
			style={{
				backgroundImage: `url(${props.src})`,
				backgroundSize: "contain",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			className="relative w-full h-[20rem] md:h-[23rem] lg:h-[19rem] xl:h-[25rem]"
		>
			<figure className="absolute -left-7 -bottom-3 w-16 h-16 sm:w-20 sm:h-20">
				<Image
					src={props.icon}
					alt="team image icon"
					quality={80}
					fill
					sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
					className="object-contain w-full h-full"
				/>
			</figure>
		</div>
	);
};

export default TeamImageCard;
