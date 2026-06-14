import React from "react";
import { motion } from "motion/react";
import { Layout, Plug, Code2, Users, Sparkles, BookOpen } from "lucide-react";

const skills = [
	{ label: "Pixel-Perfect UIs", icon: Layout },
	{ label: "API Integration", icon: Plug },
	{ label: "API Development", icon: Code2 },
	{ label: "Cross-Functional Collaboration", icon: Users },
	{ label: "Clean, Scalable Code", icon: Sparkles },
	{ label: "Always Learning", icon: BookOpen },
];

const WhatIDoUi = () => {
	return (
		<div className="grid grid-cols-2 gap-4">
			{skills.map(({ label, icon: Icon }, index) => (
				<motion.div
					animate={{ y: [0, -6, 0] }}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
						delay: index * 0.3,
					}}
					key={label}
					className="px-4 py-3 rounded-xl text-primary border-t border-[#424242] flex items-center gap-3"
					style={{
						background:
							"radial-gradient(100% 186% at 34.5% 135.3%, rgb(66, 66, 66) 0%, rgb(30, 30, 30) 100%)",
					}}
				>
					<div className="w-9 h-9 rounded-lg bg-[#1a3a25] border border-[#2a4a35] flex items-center justify-center">
						<Icon className="w-4 h-4 text-[#3ddc84]" />
					</div>
					<span className="">{label}</span>
				</motion.div>
			))}
		</div>
	);
};

export default WhatIDoUi;
