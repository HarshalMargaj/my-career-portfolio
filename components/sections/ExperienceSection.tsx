"use client";

import React from "react";
import { motion } from "motion/react";
import TimelineDemo from "../timeline-demo";

const ExperienceSection = () => {
	return (
		<div className="max-w-6xl mx-auto py-28">
			<motion.div className="uppercase text-accent tracking-widest font text-lg">
				experience
			</motion.div>
			<motion.div className="text-[64px] text-primary mb-10">
				Where I&apos;ve worked
			</motion.div>
			<div>
				<TimelineDemo />
			</div>
		</div>
	);
};

export default ExperienceSection;
