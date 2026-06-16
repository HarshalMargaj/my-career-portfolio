import { Dot } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const roles = [
	{
		role: "Frontend Developer",
	},
	{
		role: "Full Stack Developer",
	},
];

const RolesUi = () => {
	return (
		<div className="flex flex-col h-full justify-center">
			{roles.map((role, index) => (
				<motion.div
					animate={{ y: [10, 0, 10] }}
					transition={{ duration: 2, repeat: Infinity }}
					key={role.role}
				>
					<div
						className="p-3 rounded-xl border-t border-[#424242]"
						style={{
							background:
								"radial-gradient(100% 186% at 34.5% 135.3%, rgb(66, 66, 66) 0%, rgb(30, 30, 30) 100%)",
						}}
					>
						<div className="flex gap-4 items-center">
							<motion.div
								animate={{ scale: [1, 1.3, 1] }}
								transition={{ duration: 1, repeat: Infinity }}
								className="w-2 h-2 rounded-full bg-accent shrink-0"
							></motion.div>
							<div>
								<div className="leading-none text-sm md:text-base">
									{role.role}
								</div>
								<div className="text-secondary flex items-center text-sm md:text-base">
									Remote <Dot /> Full Time <Dot /> Internship
								</div>
							</div>
						</div>
					</div>

					{index < roles.length - 1 && (
						<div className="flex justify-center py-1">
							<div className="w-px h-8 bg-linear-to-b from-accent to-transparent" />
						</div>
					)}
				</motion.div>
			))}
			<div className="text-secondary italic mt-2 text-sm md:text-base">
				Available to join immediately
			</div>
		</div>
	);
};

export default RolesUi;
