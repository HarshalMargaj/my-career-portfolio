"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
	const cursorX = useMotionValue(0);
	const cursorY = useMotionValue(0);

	const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
	const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX - 16); // 16 = half of circle size, to center it
			cursorY.set(e.clientY - 16);
		};

		window.addEventListener("mousemove", moveCursor);
		return () => window.removeEventListener("mousemove", moveCursor);
	}, [cursorX, cursorY]);

	return (
		<motion.div
			style={{
				translateX: springX,
				translateY: springY,
			}}
			className="fixed top-10 left-5 w-8 h-8 rounded-full bg-accent pointer-events-none z-50"
		/>
	);
};

export default CustomCursor;
