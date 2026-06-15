"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const navItems = [
	{
		id: 1,
		name: "Home",
		to: "#home",
	},
	{
		id: 2,
		name: "About",
		to: "#about",
	},
	{
		id: 4,
		name: "Experience",
		to: "#experience",
	},
	{
		id: 5,
		name: "Projects",
		to: "#projects",
	},
	{
		id: 6,
		name: "Contact",
		to: "#contact",
	},
];

const MotionLink = motion.create(Link);

const Navbar = () => {
	return (
		<div className="absolute top-10 text-primary flex items-center justify-between w-300 ">
			<MotionLink
				href="#home"
				className="font-bold text-black text-3xl bg-accent rounded-xl w-15 h-15 flex items-center justify-center"
			>
				HM
			</MotionLink>
			<div className="flex items-center gap-6 bg-[#141414b3] py-4 px-8 border-t border-[#1e1e1e] rounded-xl h-16">
				{navItems.map(item => (
					<MotionLink
						href={item.to}
						whileHover={{ color: "#969696" }}
						key={item.id}
						className="cursor-pointer text-primary"
					>
						{item.name}
					</MotionLink>
				))}
			</div>
			<MotionLink
				href="#contact"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="p-4 rounded-xl px-4 bg-primary text-black cursor-pointer font-medium hover:bg-secondary"
			>
				Hire me
			</MotionLink>
		</div>
	);
};

export default Navbar;
