import { Metadata } from "next";
import StakingPoolCard from "@/components/StakingPoolCard";
import StakingHeader from "@/components/StakingHeader";
import StakingStats from "@/components/StakingStats";
import RewardsList from "@/components/RewardsList";
import RewardsPot from "@/components/RewardsPot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	formatDetection: {
		telephone: false,
	},
};

export default function StakingPage() {
	const pools = [
		{
			image: "/background-1.png", // Using existing image as placeholder
			category: "Homes",
			apr: "12.5%",
			title: "Bee Homes Pool",
			minStake: "100 P-NECTR",
			lockPeriod: "30d",
			tvl: "2.4M P-NECTR",
			location: "Barcelona, Spain",
			locationValue: "500K P-NECTR",
			pendingRewards: "+125.4705 P-NECTR",
		},
		{
			image: "/background-1.png",
			category: "Energy",
			apr: "12.5%",
			title: "Bee Energy Pool",
			minStake: "100 P-NECTR",
			lockPeriod: "30d",
			tvl: "2.4M P-NECTR",
			location: "Total Value Locked",
			locationValue: "2.4M P-NECTR", // Image shows this layout slightly different for Energy pool
			pendingRewards: "+125.4705 P-NECTR",
		},
		{
			image: "/background-1.png",
			category: "Rental",
			apr: "12.5%",
			title: "Bee Homes Pool", // Image says Bee Homes Pool again, maybe typo in design or just example
			minStake: "100 P-NECTR",
			lockPeriod: "30d",
			tvl: "2.4M P-NECTR",
			location: "Barcelona, Spain",
			locationValue: "500K P-NECTR",
			pendingRewards: "+125.4705 P-NECTR",
		},
		{
			image: "/background-1.png",
			category: "Farms",
			apr: "12.5%",
			title: "Bee Energy Pool",
			minStake: "100 P-NECTR",
			lockPeriod: "30d",
			tvl: "2.4M P-NECTR",
			location: "Total Value Locked",
			locationValue: "2.4M P-NECTR",
			pendingRewards: "+125.4705 P-NECTR",
		},
		{
			image: "/background-1.png",
			category: "Education",
			apr: "12.5%",
			title: "Bee Homes Pool",
			minStake: "100 P-NECTR",
			lockPeriod: "30d",
			tvl: "2.4M P-NECTR",
			location: "Barcelona, Spain",
			locationValue: "500K P-NECTR",
			pendingRewards: "+125.4705 P-NECTR",
		},
		{
			image: "/background-1.png",
			category: "Holidays",
			apr: "12.5%",
			title: "Bee Energy Pool",
			minStake: "100 P-NECTR",
			lockPeriod: "30d",
			tvl: "2.4M P-NECTR",
			location: "Total Value Locked",
			locationValue: "2.4M P-NECTR",
			pendingRewards: "+125.4705 P-NECTR",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-['Geist'] transition-colors duration-300">
			<Navbar />
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<StakingHeader />
				<StakingStats />

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
						{pools.map((pool, index) => (
							<StakingPoolCard key={index} {...pool} />
						))}
					</div>
					<div className="lg:col-span-1">
						<RewardsPot />
						<RewardsList />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
