import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<StatsSection />
			<AboutSection />
			<ExperienceSection />
		</div>
	);
}
