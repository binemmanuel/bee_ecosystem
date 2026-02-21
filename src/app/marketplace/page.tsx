import MarketplaceFilters from "@/components/MarketplaceFilters";
import MarketplaceHeader from "@/components/MarketplaceHeader";
import AssetCard from "@/components/AssetCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MarketplacePage() {
	const assets = Array(12).fill({
		image: "/background-1.png",
		category: "Bee Homes",
		status: "Funded",
		title: "Bee Homes Pool",
		location: "Barcelona, Spain",
		price: "25,000",
		currency: "P-NECTR",
	});

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-['Geist'] transition-colors duration-300">
			<header>
				<Navbar />
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<MarketplaceHeader />

				<div className="flex flex-col lg:flex-row gap-8 items-start">
                    <MarketplaceFilters />
                    
					<div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{assets.map((asset, index) => (
							<AssetCard key={index} {...asset} />
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
