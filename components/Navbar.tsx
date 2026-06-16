"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
	const [hidden, setHidden] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const { scrollY } = useScroll();
	const lastY = useRef(0);

	useMotionValueEvent(scrollY, "change", latest => {
		const dif = latest - lastY.current;

		if (latest > 100 && dif > 0) {
			setHidden(true);
		} else if (dif < 0) {
			setHidden(false);
		}

		lastY.current = latest;
	});

	return (
		<motion.div
			variants={{
				hidden: { y: "-200%" },
				show: { y: 0 },
			}}
			animate={hidden ? "hidden" : "show"}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 lg:px-0 max-w-6xl lg:mx-auto text-primary"
		>
			<div className="hidden md:flex items-center justify-between">
				<MotionLink
					href="#home"
					className="font-bold text-black text-3xl bg-accent rounded-xl w-15 h-15 flex items-center justify-center"
				>
					HM
				</MotionLink>
				<div className="flex items-center gap-6 bg-[#141414b3] py-4 px-8 border-t border-[#1e1e1e] rounded-xl h-16 backdrop-blur-2xl">
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
			<div className="flex items-center justify-between">
				<MotionLink
					href="#home"
					className="md:hidden font-bold text-black text-xl bg-accent rounded-xl w-11 h-11 flex items-center justify-center"
				>
					HM
				</MotionLink>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="md:hidden text-primary p-2 rounded-xl border border-neutral-800 bg-[#141414b3] backdrop-blur-2xl"
				>
					{menuOpen ? <X /> : <Menu />}
				</button>
			</div>

			{menuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className="md:hidden mt-3 flex flex-col gap-2 bg-[#141414e6] backdrop-blur-2xl border border-neutral-800 rounded-xl p-4"
				>
					{navItems.map(item => (
						<MotionLink
							href={item.to}
							key={item.id}
							onClick={() => setMenuOpen(false)}
							className="text-primary py-2 px-4 rounded-lg hover:bg-neutral-800 text-sm"
						>
							{item.name}
						</MotionLink>
					))}
					<MotionLink
						href="#contact"
						onClick={() => setMenuOpen(false)}
						className="mt-2 p-3 rounded-xl bg-primary text-black text-center font-medium text-sm"
					>
						Hire me
					</MotionLink>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Navbar;
