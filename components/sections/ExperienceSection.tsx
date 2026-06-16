"use client";

import React from "react";
import { motion } from "motion/react";
import TimelineDemo from "../timeline-demo";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const timelineItem = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ExperienceSection = () => {
	return (
		<motion.section
			id="experience"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="max-w-6xl mx-auto py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-0"
		>
			<motion.div
				variants={item}
				className="uppercase text-accent tracking-widest font text-sm md:text-base lg:text-lg"
			>
				experience
			</motion.div>
			<motion.div
				variants={item}
				className="text-[36px] md:text-[48px] lg:text-[64px] text-primary mb-10"
			>
				Where I&apos;ve worked
			</motion.div>
			<motion.div variants={timelineItem}>
				<TimelineDemo />
			</motion.div>
		</motion.section>
	);
};

export default ExperienceSection;
