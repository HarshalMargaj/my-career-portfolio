import React from "react";
import { motion } from "motion/react";

const stack = [
	"React.JS",
	"Next.JS",
	"TypeScript",
	"Node.JS",
	"Express.JS",
	"MongoDB",
];

const FullStackUi = () => {
	return (
		<div className="space-y-1">
			{stack.map((tech, index) => (
				<motion.div
					animate={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 1, repeat: Infinity }}
					key={tech}
					className={`w-fit py-2 px-4 rounded-xl border-t border-[#424242]  ${
						index % 2 === 0 ? "mr-auto" : "ml-auto"
					}`}
					style={{
						background:
							"radial-gradient(circle at top left, #424242 0%, #262626 100%)",
					}}
				>
					{tech}
				</motion.div>
			))}
		</div>
	);
};

export default FullStackUi;
