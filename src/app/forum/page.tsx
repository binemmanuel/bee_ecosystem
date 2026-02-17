import ForumThreadList from "@/components/ForumThreadList";
import ForumFilters from "@/components/ForumFilters";
import ForumHeader from "@/components/ForumHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForumPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-['Geist'] transition-colors duration-300">
			<Navbar />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<ForumHeader />
				<ForumFilters />
				<ForumThreadList />
			</main>

			<Footer />
		</div>
	);
}
