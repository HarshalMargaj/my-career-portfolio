import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<StatsSection />
			<AboutSection />
			<ExperienceSection />
			{/* <ProjectsSection />
			<ContactSection /> */}
		</div>
	);
}
