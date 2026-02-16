import CommunitySection from "@/components/CommunitySection";
import PillarsSection from "@/components/PillarsSection";
import GovernanceCTA from "@/components/GovernanceCTA";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<header>
				<Navbar />
				<Hero />
				<Stats />
			</header>

			<main>
				<PillarsSection />
				<GovernanceCTA />
				<CommunitySection />
			</main>
		</>
	);
}
