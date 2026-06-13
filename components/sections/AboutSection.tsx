"use client";

import React from "react";
import GlowEffect from "../GlowEffect";
import { Dot } from "lucide-react";
import OrbitingIcons from "../OrbitingIcons";

const stack = [
	"React.JS",
	"Next.JS",
	"TypeScript",
	"Node.JS",
	"Express.JS",
	"MongoDB",
];

const roles = [
	{
		role: "Frontend Developer",
	},
	{
		role: "Full Stack Developer",
	},
];

const skills = [
	"Pixel-Perfect UIs",
	"API Integration",
	"API Development",
	"Cross-Functional Collaboration",
	"Clean, Scalable Code",
	"Always Learning",
];

const AboutSection = () => {
	const baseStyles =
		"relative border-t-2 border-[#1e1e1e]  overflow-hidden rounded-3xl h-125  bg-[#141414]";
	return (
		<div className="max-w-6xl m-auto py-28">
			<div className="uppercase text-accent tracking-widest font-semibold text-lg">
				about
			</div>
			<div className="text-[64px] text-primary">Who I am</div>
			<div className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-primary">
					<div className={`${baseStyles} col-span-2`}>
						<GlowEffect top="-100px" left="-50px" />

						<div className="relative z-10 p-6 space-y-2 flex flex-col h-full">
							<div className="space-y-1">
								{stack.map((tech, index) => (
									<div
										key={tech}
										className={`w-fit py-2 px-4 rounded-xl border-t border-[#424242] text-lg ${
											index % 2 === 0
												? "mr-auto"
												: "ml-auto"
										}`}
										style={{
											background:
												"radial-gradient(circle at top left, #424242 0%, #262626 100%)",
										}}
									>
										{tech}
									</div>
								))}
							</div>
							<div className="mt-auto space-y-2">
								<div className="text-2xl text-primary">
									Full Stack Developer
								</div>
								<div className="text-[#a5a5a5]">
									Building modern, scalable web applications
									with a focus on performance, usability, and
									clean user experiences.
								</div>
							</div>
						</div>
					</div>
					<div className={`${baseStyles} col-span-2`}>
						<GlowEffect bottom="-100px" right="-50px" />

						<div className="relative z-10 p-6 space-y-2 flex flex-col h-full">
							<div className="space-y-2 mr-auto">
								<div className="text-secondary italic">
									Customer Query
								</div>
								<div
									className="border-t border-[#26391d] rounded-xl p-3 max-w-56"
									style={{
										background:
											"radial-gradient(362% 823.7637795275592% at 25.6% -42.1%, var(--token-b6b333e5-ab4b-41a9-8295-7e19568f6c19, rgb(20, 20, 20)) 0%, var(--token-da5c3404-5168-49a5-80e0-adfa323c836b, rgb(50, 205, 135)) 100%)",
									}}
								>
									<div>What is RAG architecture?</div>
								</div>
								<div>
									<img
										src={
											"https://randomuser.me/api/portraits/men/32.jpg"
										}
										alt="user"
										className="rounded-full w-10 h-10"
									/>
								</div>
							</div>
							<div className="space-y-2 ml-auto">
								<div className="text-end w-10 h-10 rounded-full bg-[#424242] flex items-center justify-center ml-auto">
									AI
								</div>
								<div
									className="w-fit p-3 rounded-xl ml-auto max-w-70 border-t border-[#424242]"
									style={{
										background:
											"radial-gradient(100% 186% at 34.5% 135.3%, var(--token-f9a9188c-d2c0-4116-ab2c-5325eb80f138, rgb(66, 66, 66)) 0%, var(--token-ff4e9448-0a56-4203-bf68-c5268ba7fda5, rgb(30, 30, 30)) 100%)",
									}}
								>
									Retrieval-Augmented Generation fetches
									relevant docs before generating answers...
								</div>
								<div className="text-secondary italic text-end">
									Automated response
								</div>
							</div>
							<div className="mt-auto space-y-2">
								<div className="text-2xl text-primary">
									Currently Exploring
								</div>
								<div className="text-[#a5a5a5]">
									Experimenting with AI applications, RAG
									systems, semantic search, and emerging
									developer tools.
								</div>
							</div>
						</div>
					</div>
					<div className={`${baseStyles} col-span-2`}>
						<GlowEffect top="-100px" right="-50px" />

						<div className="relative z-10 p-6 space-y-2 flex flex-col h-full">
							<div className="flex flex-col h-full justify-center">
								{roles.map((role, index) => (
									<div key={role.role}>
										<div
											className="p-3 rounded-xl border-t border-[#424242]"
											style={{
												background:
													"radial-gradient(100% 186% at 34.5% 135.3%, rgb(66, 66, 66) 0%, rgb(30, 30, 30) 100%)",
											}}
										>
											<div className="flex gap-4 items-center">
												<div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
												<div>
													<div className="leading-none">
														{role.role}
													</div>
													<div className="text-secondary flex items-center">
														Remote <Dot /> Full Time{" "}
														<Dot /> Internship
													</div>
												</div>
											</div>
										</div>

										{index < roles.length - 1 && (
											<div className="flex justify-center py-1">
												<div className="w-px h-8 bg-linear-to-b from-accent to-transparent" />
											</div>
										)}
									</div>
								))}
								<div className="text-secondary italic mt-2">
									Available to join immediately
								</div>
							</div>
							<div className="mt-auto space-y-2">
								<div className="text-2xl text-primary">
									Open To Work
								</div>
								<div className="text-[#a5a5a5]">
									Seeking Frontend and Full Stack
									opportunities to contribute, grow, and build
									meaningful products.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-7 gap-6">
					<div className={`${baseStyles} col-span-4`}>
						<GlowEffect top="-100px" left="-50px" />

						<div className="relative z-10 p-6 space-y-2 flex flex-col h-full">
							<div className="grid grid-cols-2 gap-4">
								{skills.map(skill => (
									<div
										key={skill}
										className="px-3 py-6 rounded-xl text-primary border-t border-[#424242] text-center"
										style={{
											background:
												"radial-gradient(100% 186% at 34.5% 135.3%, var(--token-f9a9188c-d2c0-4116-ab2c-5325eb80f138, rgb(66, 66, 66)) 0%, var(--token-ff4e9448-0a56-4203-bf68-c5268ba7fda5, rgb(30, 30, 30)) 100%)",
										}}
									>
										{skill}
									</div>
								))}
							</div>
							<div className="mt-auto space-y-2">
								<div className="text-2xl text-primary">
									What I Actually Do
								</div>
								<div className="text-[#a5a5a5]">
									I transform ideas into production-ready
									experiences, from crafting polished
									interfaces to integrating APIs and writing
									maintainable code.
								</div>
							</div>
						</div>
					</div>
					<div className={`${baseStyles} col-span-3`}>
						<GlowEffect top="-100px" left="-50px" />

						<div className="relative z-10 p-6 space-y-2 flex flex-col h-full">
							<div className="h-full flex items-center justify-center">
								<OrbitingIcons />
							</div>
							<div className="space-y-2 mt-auto">
								<div className="text-2xl text-primary">
									Tech Ecosystem
								</div>
								<div className="text-[#a5a5a5]">
									The technologies and tools I use to design,
									develop, and ship modern web applications.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
