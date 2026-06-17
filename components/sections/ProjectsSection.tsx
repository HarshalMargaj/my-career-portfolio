// "use client";

// import React from "react";
// import { motion, useScroll, useTransform } from "motion/react";
// import { div } from "motion/react-client";

// const projects = [
// 	{
// 		id: 1,
// 		category: "Social Media",
// 		title: "Connectly — A Full-Stack Microblogging Platform",
// 		description:
// 			"A real-time social media platform featuring live feeds, optimistic UI updates, and secure authentication. Built with a focus on smooth, instant user interactions and scalable data handling.",
// 		techStack: [
// 			"Next.js",
// 			"Prisma",
// 			"Supabase",
// 			"TanStack Query",
// 			"Zustand",
// 			"Tailwind CSS",
// 			"Shadcn UI",
// 			"Clerk",
// 		],
// 		thumbnail: "/projects/connectly.png",
// 		liveDemo: "https://connectly-demo.vercel.app",
// 		sourceCode: "https://github.com/yourname/connectly",
// 		top: "top-40",
// 	},
// 	{
// 		id: 2,
// 		category: "Productivity",
// 		title: "TaskFlow — Project Management & Collaboration Tool",
// 		description:
// 			"A board-based project management tool with intuitive drag-and-drop task organization and role-based access control, designed to help teams collaborate efficiently across projects.",
// 		techStack: [
// 			"Next.js",
// 			"Server Actions",
// 			"Prisma",
// 			"Supabase",
// 			"Zustand",
// 			"Tailwind CSS",
// 			"Shadcn UI",
// 			"Clerk",
// 		],
// 		thumbnail: "/projects/taskflow.png",
// 		liveDemo: "https://taskflow-demo.vercel.app",
// 		sourceCode: "https://github.com/yourname/taskflow",
// 		top: "top-46",
// 	},
// 	{
// 		id: 3,
// 		category: "E-Commerce",
// 		title: "ShopVista — Full-Stack E-Commerce Platform",
// 		description:
// 			"A modern e-commerce experience with product search, cart, wishlist, and secure Stripe-powered checkout, backed by a headless CMS for flexible content and product management.",
// 		techStack: [
// 			"React.js",
// 			"Redux Toolkit",
// 			"Tailwind CSS",
// 			"Strapi",
// 			"Stripe",
// 		],
// 		thumbnail: "/projects/shopvista.png",
// 		liveDemo: "https://shopvista-demo.vercel.app",
// 		sourceCode: "https://github.com/yourname/shopvista",
// 		top: "top-52",
// 	},
// ];

// const container = {
// 	hidden: { opacity: 0 },
// 	show: {
// 		opacity: 1,
// 		transition: {
// 			staggerChildren: 0.3,
// 		},
// 	},
// };

// const item = {
// 	hidden: { opacity: 0, y: 20 },
// 	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const ProjectsSection = () => {
// 	const { scrollYProgress } = useScroll();

// 	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

// 	return (
// 		<motion.div variants={container} className="max-w-6xl mx-auto py-28">
// 			<motion.div
// 				variants={item}
// 				className="uppercase text-accent tracking-widest font text-lg"
// 			>
// 				Projects
// 			</motion.div>
// 			<motion.div
// 				variants={item}
// 				className="text-[64px] text-primary mb-10"
// 			>
// 				What I&apos;ve Built
// 			</motion.div>
// 			<div className="relative">
// 				{projects.map(project => (
// 					<motion.div
// 						style={{ scale }}
// 						key={project.id}
// 						className={`sticky ${project.top} w-full bg-[#141414] rounded-xl p-6 space-y-2 h-125 border-t-2 border-[#1e1e1e]`}
// 					>
// 						<div className="uppercase tracking-widest text-secondary text-sm">
// 							{project.category}
// 						</div>
// 						<div className="text-primary text-[32px]">
// 							{project.title}
// 						</div>
// 						<div className="text-secondary">
// 							{project.description}
// 						</div>
// 						<div className="space-x-2">
// 							<button className="rounded-xl text-black font-semibold cursor-pointer bg-accent p-2 px-4">
// 								Live Demo
// 							</button>
// 							<button className="rounded-xl border border-neutral-800 text-primary cursor-pointer p-2 px-4">
// 								Source Code
// 							</button>
// 						</div>
// 						<div className="flex items-center text-accent gap-4">
// 							{project.techStack.map(tech => (
// 								<div key={tech}>{tech}</div>
// 							))}
// 						</div>
// 					</motion.div>
// 				))}
// 			</div>
// 		</motion.div>
// 	);
// };

// export default ProjectsSection;
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Globe from "../Globe";

const projects = [
	{
		id: 1,
		category: "Social Media",
		title: "Connectly — A Full-Stack Microblogging Platform",
		description:
			"A real-time social media platform featuring live feeds, optimistic UI updates, and secure authentication. Built with a focus on smooth, instant user interactions and scalable data handling.",
		techStack: [
			"Next.js",
			"Prisma",
			"Supabase",
			"TanStack Query",
			"Zustand",
			"Tailwind CSS",
			"Shadcn UI",
			"Clerk",
		],
		liveDemo: "https://connectly-ivory.vercel.app/",
		sourceCode: "https://github.com/HarshalMargaj/connectly",
		thumbnail: "/projects/connectlylight.png",
	},
	{
		id: 2,
		category: "Productivity",
		title: "TaskFlow — Project Management & Collaboration Tool",
		description:
			"A board-based project management tool with intuitive drag-and-drop task organization and role-based access control, designed to help teams collaborate efficiently across projects.",
		techStack: [
			"Next.js",
			"Server Actions",
			"Prisma",
			"Supabase",
			"Zustand",
			"Tailwind CSS",
			"Shadcn UI",
			"Clerk",
		],
		liveDemo: "https://taskflow-v3.vercel.app/",
		sourceCode: "https://github.com/HarshalMargaj/taskflow",
		thumbnail: "/projects/taskflow.png",
	},
	{
		id: 3,
		category: "E-Commerce",
		title: "ShopVista — Full-Stack E-Commerce Platform",
		description:
			"A modern e-commerce experience with product search, cart, wishlist, and secure Stripe-powered checkout, backed by a headless CMS for flexible content and product management.",
		techStack: [
			"React.js",
			"Redux Toolkit",
			"Tailwind CSS",
			"Strapi",
			"Stripe",
		],
		liveDemo: "https://shopvistav4.netlify.app/",
		sourceCode: "https://github.com/HarshalMargaj/E-Commerce-Application",
		thumbnail: "/projects/shopvista.png",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.3 },
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface Project {
	id: number;
	category: string;
	title: string;
	description: string;
	techStack: string[];
	liveDemo: string;
	sourceCode: string;
	thumbnail: string;
}

const MotionLink = motion.create(Link);

const ProjectCard = ({
	project,
	i,
	progress,
	range,
	targetScale,
}: {
	project: Project;
	i: number;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
}) => {
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div className="sticky top-40 flex items-center justify-center">
			<motion.div
				style={{
					scale,
					top: `calc(-5vh + ${i * 32}px)`,
				}}
				className="relative top-0 w-full max-w-6xl bg-[#141414] rounded-2xl p-6 space-y-2 h-125 md:h-110 lg:h-125 border-t-2 border-[#1e1e1e] flex flex-col md:flex-row items-center  md:gap-4 lg:gap-6 overflow-hidden"
			>
				<div className="space-y-4 flex flex-col h-full">
					<div className="uppercase tracking-widest text-secondary text-sm">
						{project.category}
					</div>
					<div className="text-primary text-[22px] md:text-[26px] lg:text-[32px]">
						{project.title}
					</div>
					<div className="text-secondary text-sm md:text-base">
						{project.description}
					</div>
					<div className="flex gap-2 md:gap-4 items-center">
						<MotionLink
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href={project.liveDemo}
							target="_blank"
							className="rounded-xl text-black font-semibold cursor-pointer bg-accent p-2 px-4 hover:bg-accent/85 text-sm md:text-base"
						>
							Live Demo
						</MotionLink>
						<MotionLink
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href={project.sourceCode}
							target="_blank"
							className="rounded-xl border border-neutral-800 text-primary cursor-pointer p-2 px-4 hover:text-secondary text-sm md:text-base"
						>
							Source Code
						</MotionLink>
					</div>
					<div className="flex items-center flex-wrap gap-2 md:gap-4 mt-auto">
						{project.techStack.map(tech => (
							<div
								key={tech}
								style={{
									background:
										"radial-gradient(circle at top left, #424242 0%, #262626 100%)",
								}}
								className="text-sm md:text-base p-2 rounded-xl text-primary"
							>
								{tech}
							</div>
						))}
					</div>
				</div>

				<Image
					src={project.thumbnail}
					alt={`${project.title} thumbnail`}
					width={1200}
					height={400}
					className="hidden lg:block -mr-36 w-175 rounded-xl"
				/>
			</motion.div>
		</div>
	);
};

const ProjectsSection = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<motion.section
			id="projects"
			variants={container}
			initial="hidden"
			whileInView="show"
			className="max-w-6xl mx-auto pt-10 md:pt-20 lg:pt-28 pb-20 md:pb-20 lg:pb-40 relative px-4 md:px-8 lg:px-0"
		>
			<Globe position="translate-x-110 lg:translate-x-280" />
			<motion.div
				variants={item}
				className="uppercase text-accent tracking-widest font text-sm md:text-base lg:text-lg"
			>
				Projects
			</motion.div>
			<motion.div
				variants={item}
				className="text-[36px] md:text-[48px] lg:text-[64px] text-primary mb-20"
			>
				What I&apos;ve Built
			</motion.div>

			<div ref={containerRef} className="relative">
				{projects.map((project, i) => {
					const targetScale = 1 - (projects.length - i) * 0.05;
					return (
						<ProjectCard
							key={project.id}
							i={i}
							project={project}
							progress={scrollYProgress}
							range={[i * 0.25, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</div>
		</motion.section>
	);
};

export default ProjectsSection;
