import CommunitySection from "@/components/CommunitySection";
import PillarsSection from "@/components/PillarsSection";
import GovernanceCTA from "@/components/GovernanceCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";

export default function HomePage() {
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

			<Footer />
		</>
	);
}
