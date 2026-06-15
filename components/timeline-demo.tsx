import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
	const data = [
		{
			title: "Apr 2024 - Mar 2025",
			content: (
				<div>
					<h3 className="text-xl font-semibold text-primary mb-1">
						Software Engineer
					</h3>
					<p className="mb-4 text-base text-neutral-400">
						Oculon.AI, Mumbai
					</p>
					<ul className="space-y-2 text-xs md:text-lg text-secondary list-disc pl-4">
						<li>
							Led end-to-end frontend development of the core
							product, owning the complete UI/UX design and
							implementation from scratch.
						</li>
						<li>
							Built the entire Dashboard and Settings Panel,
							handling complex state management with Redux and
							ensuring responsiveness across all devices and
							browsers.
						</li>
						<li>
							Developed a library of reusable React.js and
							Tailwind CSS components following DRY principles,
							improving codebase maintainability and reducing
							development time for new features.
						</li>
						<li>
							Integrated RESTful APIs and implemented CRUD
							operations, enabling smooth real-time data flow
							across the application.
						</li>
						<li>
							Optimized frontend performance, reducing product
							load time and improving responsiveness — directly
							impacting user experience.
						</li>
						<li>
							Collaborated with designers and backend engineers to
							align on design systems, API contracts, and UX goals
							throughout the product lifecycle.
						</li>
					</ul>
				</div>
			),
		},
		{
			title: "Jul 2023 - Sep 2023",
			content: (
				<div>
					<h3 className="text-xl font-semibold text-primary mb-1">
						Full Stack Developer Intern
					</h3>
					<p className="mb-4 text-base text-neutral-400">
						Fynd, Mumbai
					</p>
					<ul className="space-y-2 text-xs md:text-lg text-secondary list-disc pl-4">
						<li>
							Worked on frontend and backend tasks simulating
							real-world development workflows, including API
							integration and reusable component design.
						</li>
						<li>
							Contributed to mini-projects covering full-stack
							development practices across the team.
						</li>
					</ul>
				</div>
			),
		},
	];

	return (
		<div className="relative w-full overflow-clip">
			<Timeline data={data} />
		</div>
	);
}
