import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const RAGUi = () => {
	return (
		<>
			<motion.div className="space-y-2 mr-auto translate-y-20 group-hover:translate-y-0 transition-all duration-500">
				<div className="text-secondary italic">Customer Query</div>
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
					<Image
						src={"https://randomuser.me/api/portraits/men/32.jpg"}
						alt="user"
						className="rounded-full"
						width={40}
						height={40}
					/>
				</div>
			</motion.div>
			<div className="space-y-2 ml-auto opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
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
					Retrieval-Augmented Generation fetches relevant docs before
					generating answers...
				</div>
				<div className="text-secondary italic text-end">
					Automated response
				</div>
			</div>
		</>
	);
};

export default RAGUi;
