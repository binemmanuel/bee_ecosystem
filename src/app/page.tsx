import PillarsSection from "@/components/PillarsSection";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Stats />
			<PillarsSection />
		</main>
	);
}
