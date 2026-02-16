import PillarsSection from "@/components/PillarsSection";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import GovernanceCTA from "./GovernanceCTA";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Stats />
			<PillarsSection />
			<GovernanceCTA />
		</main>
	);
}
