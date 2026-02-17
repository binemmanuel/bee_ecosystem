import GovernanceProcess from "@/components/GovernanceProcess";
import OnChainVotingCard from "@/components/OnChainVotingCard";
import GovernanceModel from "@/components/GovernanceModel";
import RecentProposals from "@/components/RecentProposals";
import GetNotifiedCard from "@/components/GetNotifiedCard";
import VotingPowerCard from "@/components/VotingPowerCard";
import GovernanceStats from "@/components/GovernanceStats";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GovernancePage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-['Geist'] transition-colors duration-300">
			<Navbar />
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="mb-8">
					<div className="flex items-center gap-4 mb-2">
						<div className="w-12 h-12 rounded-[15px] border border-[#EDA909] flex items-center justify-center text-[#EDA909] bg-[#EDA9091A]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect
									width="18"
									height="18"
									x="3"
									y="3"
									rx="2"
								/>
								<path d="m9 12 2 2 4-4" />
							</svg>
						</div>
						<div>
							<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
								Governance Overview
							</h1>
							<p className="text-gray-600 dark:text-[#818181]">
								The Bee Ecosystem DAO operates on a
								decentralized governance model where P-NECTR
								holders can propose, discuss, and vote on key
								decisions that shape the future of the
								ecosystem.
							</p>
						</div>
					</div>
				</div>

				<GovernanceStats />

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
					<div className="lg:col-span-2 space-y-8">
						<GovernanceModel />
						<GovernanceProcess />
						<RecentProposals />
					</div>
					<div className="lg:col-span-1 space-y-6">
						<OnChainVotingCard />
						<GetNotifiedCard />
						<VotingPowerCard />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
