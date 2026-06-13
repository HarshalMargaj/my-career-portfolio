"use client";

import { motion } from "motion/react";
import Image from "next/image";

const icons = [
	"/icons8-atom-100.png",
	"/icons8-next.js-100.png",
	"/icons8-nodejs-100.png",
	"/icons8-redux-100.png",
	"/icons8-mongodb-100 (1).png",
	"/icons8-supabase-100 (1).png",
	"/icons8-express-js-100.png",
	"/icons8-tailwind-css-100.png",
];

const OrbitingIcons = () => {
	const radius = 120;

	return (
		<div className="relative flex items-center justify-center h-75">
			<div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-black font-bold z-10 absolute">
				HM
			</div>

			<motion.div
				className="absolute"
				style={{ width: radius * 2, height: radius * 2 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
			>
				{icons.map((icon, i) => {
					const angle = (i / icons.length) * 2 * Math.PI;
					const x = radius + radius * Math.cos(angle) - 28;
					const y = radius + radius * Math.sin(angle) - 28;

					return (
						<motion.div
							key={icon}
							className="absolute w-14 h-14 rounded-full bg-[#1a3a25] border-t border-[#2a4a35] flex items-center justify-center text-[10px] text-[#3ddc84] font-semibold"
							style={{
								left: x,
								top: y,
								background:
									"radial-gradient(155.3763440860215% 289% at 38.5% 128.5%, var(--token-b6b333e5-ab4b-41a9-8295-7e19568f6c19, rgb(20, 20, 20)) 0%, var(--token-da5c3404-5168-49a5-80e0-adfa323c836b, rgb(50, 205, 135)) 100%)",
							}}
							animate={{ rotate: -360 }}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							<Image
								src={icon}
								alt="icon"
								width={38}
								height={38}
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default OrbitingIcons;
