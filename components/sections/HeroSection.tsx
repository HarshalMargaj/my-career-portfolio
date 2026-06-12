import React from "react";

const HeroSection = () => {
	return (
		<div className=" h-screen flex flex-col items-center justify-center gap-4">
			<div className="border rounded-full py-2 px-10 border-neutral-800 flex items-center gap-2 bg-[#141414]">
				<div className="w-2 h-2 bg-accent rounded-full"></div>
				<div className="text-neutral-400 text-xl">
					Available for work
				</div>
			</div>
			<div className="text-[96px] text-primary leading-none font-semibold">
				Harshal Margaj
			</div>
			<div className="text-accent text-2xl">Full Stack Developer</div>
			<div className="text-secondary text-xl text-center">
				I build full-stack web applications with React, Next.js and
				Node.js <br />— from pixel-perfect UIs to scalable backends.
			</div>
			<div className="flex items-center gap-2">
				<button className="rounded-md p-2 px-4 text-lg text-black bg-accent font-medium cursor-pointer">
					View Projects
				</button>
				<button className="rounded-md p-2 px-4 text-lg text-primary border border-neutral-800 font-medium cursor-pointer">
					Download CV
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
