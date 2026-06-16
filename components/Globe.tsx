import React from "react";
import { motion } from "motion/react";

interface GlobeProps {
	position: string;
}

const Globe = ({ position }: GlobeProps) => {
	return (
		<div className="hidden lg:block absolute inset-y-0 left-0 pointer-events-none -z-10">
			<div className="sticky top-50">
				<motion.img
					animate={{ y: [0, -20, 0] }}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					src="https://framerusercontent.com/images/dwxExDkm76wbBZfsBvtV3qnpVs.png?scale-down-to=2048"
					width={500}
					height={500}
					className={`${position} blur-md opacity-70`}
				/>
			</div>
		</div>
	);
};

export default Globe;
