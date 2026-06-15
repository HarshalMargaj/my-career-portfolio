"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

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
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const socialLinks = [
	{
		id: 1,
		name: "LinkedIn",
		icon: <FaLinkedin />,
		url: "https://www.linkedin.com/in/harshal-margaj",
	},
	{
		id: 2,
		name: "GitHub",
		icon: <FaGithub />,
		url: "https://github.com/HarshalMargaj",
	},
	{
		id: 3,
		name: "YouTube",
		icon: <FaYoutube />,
		url: "https://www.youtube.com/@docodewithharsh",
	},
];

const MotionLink = motion.create(Link);

const ContactSection = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("harshal.margaj12@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<section
			id="contact"
			className="rounded-t-4xl"
			style={{
				background:
					"linear-gradient(0deg, var(--token-b6b333e5-ab4b-41a9-8295-7e19568f6c19, rgb(20, 20, 20)) 0%, var(--token-df4e3fb2-9e88-4b57-a86f-989b7c384ece, rgb(23, 35, 15)) 45%, var(--token-3957903f-39b2-45d2-ba6b-ec131b9659db, rgb(38, 57, 29)) 65%, var(--token-b333e7ef-6b1d-46d5-8666-6f0fd79e6818, rgb(36, 95, 55)) 85%, var(--token-b333e7ef-6b1d-46d5-8666-6f0fd79e6818, rgb(36, 95, 55)) 100%)",
			}}
		>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				className="max-w-6xl mx-auto pt-28 text-center space-y-4"
			>
				<motion.div
					variants={item}
					className="text-[64px] text-primary"
				>
					Get in Touch
				</motion.div>
				<motion.div variants={item} className="text-[#a5a5a5]">
					have a project in mind or just want to chat? my inbox is{" "}
					<br />
					always open, i&apos;ll try my best to get back to you.
				</motion.div>
				<motion.div
					variants={item}
					className="flex items-center justify-between gap-4 p-2 rounded-xl text-primary bg-white/4 border border-white/10 px-6 py-4 mx-auto w-100"
				>
					harshal.margaj12@gmail.com{" "}
					{copied ? (
						<Check />
					) : (
						<Copy
							className="cursor-pointer hover:text-secondary transition-all duration-500"
							onClick={handleCopy}
						/>
					)}
				</motion.div>
				<MotionLink
					href="/resume/CV_Harshal_Margaj.pdf"
					download="Harshal_Margaj_Resume.pdf"
					variants={item}
					className="text-center text-[#a5a5a5] cursor-pointer hover:text-white  max-w-50 mx-auto block"
				>
					or download my resume
				</MotionLink>
				<motion.div
					variants={item}
					className="mx-auto flex items-center gap-4 justify-center text-secondary text-3xl"
				>
					{socialLinks.map(e => (
						<MotionLink
							href={e.url}
							target="_blank"
							whileHover={{ scale: 1.1, y: -5 }}
							transition={{
								duration: 0.5,
							}}
							key={e.id}
							className="cursor-pointer hover:text-white"
						>
							{e.icon}
						</MotionLink>
					))}
				</motion.div>
				<motion.hr
					variants={item}
					className="text-white/10 mt-28 mb-0"
				/>
				<motion.div
					variants={item}
					className="flex items-center justify-between text-[#a5a5a5] py-10"
				>
					<div>© 2025 harshal margaj. all rights reserved.</div>
					<div>built with next.js</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default ContactSection;
