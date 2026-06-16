"use client";

import React from "react";
import GlowEffect from "../GlowEffect";
import OrbitingIcons from "../OrbitingIcons";
import { motion } from "motion/react";
import WhatIDoUi from "../WhatIDoUi";
import RolesUi from "../RolesUi";
import RAGUi from "../RAGUi";
import FullStackUi from "../FullStackUi";
import Globe from "../Globe";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 100 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const aboutHeader = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const aboutData = [
	{
		id: 1,
		title: "Full Stack Developer",
		description:
			"Building modern, scalable web applications with a focus on performance, usability, and clean user experiences.",
		span: "md:col-span-1 lg:col-span-2",
		grid: 1,
		ui: <FullStackUi />,
		glow: <GlowEffect top="-100px" left="-50px" />,
	},
	{
		id: 2,
		title: "Currently Exploring",
		description:
			"Experimenting with AI applications, RAG systems, semantic search, and emerging developer tools.",
		span: "md:col-span-1 lg:col-span-2",
		grid: 1,
		ui: <RAGUi />,
		glow: <GlowEffect bottom="-100px" right="-50px" />,
	},
	{
		id: 3,
		title: "Open To Work",
		description:
			"Seeking Frontend and Full Stack opportunities to contribute, grow, and build meaningful products.",
		span: "md:col-span-2",
		grid: 1,
		ui: <RolesUi />,
		glow: <GlowEffect top="-100px" right="-50px" />,
	},
	{
		id: 4,
		title: "What I Actually Do",
		description:
			"I transform ideas into production-ready experiences, from crafting polished interfaces to integrating APIs and writing maintainable code.",
		span: "col-span-full md:col-span-1 lg:col-span-4",
		grid: 2,
		ui: <WhatIDoUi />,
		glow: <GlowEffect top="-100px" left="-50px" />,
	},
	{
		id: 5,
		title: "Tech Ecosystem",
		description:
			"The technologies and tools I use to design, develop, and ship modern web applications.",
		span: "col-span-full md:col-span-1 lg:col-span-3",
		grid: 2,
		ui: <OrbitingIcons />,
		glow: <GlowEffect top="-100px" left="-50px" />,
	},
];

const gridOne = aboutData.filter(data => data.grid === 1);
const gridTwo = aboutData.filter(data => data.grid === 2);

const AboutSection = () => {
	const baseStyles =
		"relative border-t-2 border-[#1e1e1e]  overflow-hidden rounded-3xl h-125  bg-[#141414]";

	return (
		<motion.section
			id="about"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="max-w-6xl m-auto py-16 md:py-20 lg:py-28 relative px-4 md:px-8 lg:px-0"
		>
			<Globe position="-translate-x-110" />
			<motion.div
				variants={aboutHeader}
				className="uppercase text-accent tracking-widest font text-sm md:text-base lg:text-lg"
			>
				about
			</motion.div>
			<motion.div
				variants={aboutHeader}
				className="text-[36px] md:text-[48px] lg:text-[64px] text-primary mb-10"
			>
				Who I am
			</motion.div>
			<div className="space-y-4 md:space-y-6">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{
						once: true,
						amount: 0.2,
					}}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 text-primary"
				>
					{gridOne.map(data => (
						<motion.div
							variants={item}
							key={data.id}
							className={`${baseStyles} ${data.span} group`}
						>
							{data.glow}

							<div className="relative z-10 p-6 space-y-2 flex flex-col h-full">
								{data.ui}
								<div className="mt-auto space-y-2">
									<div className="text-lg md:text-xl lg:text-2xl text-primary">
										{data.title}
									</div>
									<div className="text-[#a5a5a5] text-sm md:text-base">
										{data.description}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{
						once: true,
						amount: 0.2,
					}}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-6"
				>
					{gridTwo.map(data => (
						<motion.div
							variants={item}
							key={data.id}
							className={`${baseStyles} ${data.span}`}
						>
							{data.glow}

							<div className="relative z-10 p-6 space-y-2 flex flex-col h-full">
								<div className="h-full flex items-center justify-center">
									{data.ui}
								</div>
								<div className="mt-auto space-y-2">
									<div className="text-lg md:text-xl lg:text-2xl text-primary">
										{data.title}
									</div>
									<div className="text-[#a5a5a5] text-sm md:text-base">
										{data.description}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
};

export default AboutSection;
