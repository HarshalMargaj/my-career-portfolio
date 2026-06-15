"use client";

import React from "react";
import { motion } from "motion/react";
import Navbar from "../Navbar";
import Link from "next/link";

const container = {
	hidden: {},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const MotionLink = motion.create(Link);

const HeroSection = () => {
	return (
		<motion.section
			id="home"
			variants={container}
			initial="hidden"
			animate="show"
			transition={{ duration: 0.5 }}
			className=" h-screen flex flex-col items-center justify-center gap-4 relative overflow-x-hidden"
		>
			<Navbar />
			<motion.img
				animate={{ y: [0, -20, 0] }}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				src={
					"https://framerusercontent.com/images/dwxExDkm76wbBZfsBvtV3qnpVs.png?scale-down-to=2048"
				}
				width={600}
				height={600}
				className="absolute -top-70 -right-50 -z-10"
			/>
			<motion.div
				variants={item}
				className="border rounded-full py-2 px-10 border-neutral-800 flex items-center gap-2 bg-[#141414]"
			>
				<motion.div
					animate={{ scale: [1, 1.3, 1] }}
					transition={{
						repeat: Infinity,
						duration: 1,
					}}
					className="w-2 h-2 bg-accent rounded-full"
				></motion.div>
				<div className="text-secondary text-lg">Available for work</div>
			</motion.div>
			<motion.div
				variants={item}
				className="text-[96px] text-primary leading-none"
			>
				Harshal Margaj
			</motion.div>
			<motion.div variants={item} className="text-accent text-2xl">
				Full Stack Developer
			</motion.div>
			<motion.div
				variants={item}
				className="text-secondary text-xl text-center"
			>
				I build full-stack web applications with React, Next.js and
				Node.js <br />— from pixel-perfect UIs to scalable backends.
			</motion.div>
			<motion.div variants={item} className="flex items-center gap-2">
				<MotionLink
					href="#projects"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="rounded-md p-2 px-4 text-lg text-black bg-accent hover:bg-accent/85 font-medium cursor-pointer"
				>
					View Projects
				</MotionLink>
				<MotionLink
					href="/resume/CV_Harshal_Margaj.pdf"
					download="Harshal_Margaj_Resume.pdf"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="rounded-md p-2 px-4 text-lg text-primary border border-neutral-800 font-medium cursor-pointer hover:text-secondary"
				>
					Download CV
				</MotionLink>
			</motion.div>
		</motion.section>
	);
};

export default HeroSection;
