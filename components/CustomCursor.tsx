// "use client";

// import { useEffect } from "react";
// import { motion, useMotionValue, useSpring } from "motion/react";

// const CustomCursor = () => {
// 	const cursorX = useMotionValue(0);
// 	const cursorY = useMotionValue(0);

// 	const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
// 	const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

// 	useEffect(() => {
// 		const moveCursor = (e: MouseEvent) => {
// 			cursorX.set(e.clientX - 16); // 16 = half of circle size, to center it
// 			cursorY.set(e.clientY - 16);
// 		};

// 		window.addEventListener("mousemove", moveCursor);
// 		return () => window.removeEventListener("mousemove", moveCursor);
// 	}, [cursorX, cursorY]);

// 	return (
// 		<motion.div
// 			style={{
// 				translateX: springX,
// 				translateY: springY,
// 			}}
// 			className="fixed top-10 left-5 w-8 h-8 rounded-full bg-accent pointer-events-none z-50"
// 		/>
// 	);
// };

// export default CustomCursor;
"use client";

import { useEffect } from "react";

const CustomCursor = () => {
	useEffect(() => {
		const particles: {
			x: number;
			y: number;
			alpha: number;
			el: HTMLDivElement;
		}[] = [];

		const moveCursor = (e: MouseEvent) => {
			const particle = document.createElement("div");
			particle.style.cssText = `
				position: fixed;
				left: ${e.clientX}px;
				top: ${e.clientY}px;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background: #10b981;
				pointer-events: none;
				z-index: 9999;
				transform: translate(-50%, -50%);
				transition: none;
			`;
			document.body.appendChild(particle);

			particles.push({
				x: e.clientX,
				y: e.clientY,
				alpha: 1,
				el: particle,
			});

			// fade out and remove
			let alpha = 1;
			const fade = setInterval(() => {
				alpha -= 0.05;
				particle.style.opacity = String(alpha);
				particle.style.transform = `translate(-50%, -50%) scale(${alpha})`;
				if (alpha <= 0) {
					clearInterval(fade);
					particle.remove();
				}
			}, 20);
		};

		window.addEventListener("mousemove", moveCursor);
		return () => window.removeEventListener("mousemove", moveCursor);
	}, []);

	return null;
};

export default CustomCursor;
