"use client";

import React from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";

const stats = [
	{
		id: 1,
		value: 1,
		suffix: "+",
		label: "Years of Experience",
	},
	{
		id: 2,
		value: 3,
		suffix: "+",
		label: "Full-Stack Projects Built",
	},
	{
		id: 3,
		value: 10,
		suffix: "+",
		label: "Technologies Explored",
	},
	{
		id: 4,
		value: 190,
		suffix: "+",
		label: "DSA Problems Solved",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const StatsSection = () => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.5 }}
			className="text-primary max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto  gap-4 md:gap-6 px-4 md:px-8 lg:px-0"
		>
			{stats.map(stat => (
				<motion.div
					key={stat.id}
					variants={item}
					whileHover={{
						y: -10,
						scale: 1.05,
					}}
					transition={{
						type: "spring",
						stiffness: 300,
					}}
					className="border border-neutral-800 p-2 rounded-xl flex items-center gap-4 bg-[#141414] h-18 md:h-24 justify-center cursor-pointer"
				>
					<div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
						<CountUp
							end={stat.value}
							duration={5}
							suffix={stat.suffix}
						/>
					</div>

					<div className="text-sm md:text-base text-[#a5a5a5]">
						{stat.label}
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default StatsSection;
