export default function RewardsList() {
	const pools = [
		{ name: "Bee Homes Pool", reward: "+125.3452 P-NECTR" },
		{ name: "Bee Rentals Pool", reward: "+125.3452 P-NECTR" },
		{ name: "Bee Farms Pool", reward: "+125.3452 P-NECTR" },
		{ name: "Bee Farms Pool", reward: "+125.3452 P-NECTR" },
	];

	return (
		<div>
			<h3 className="text-gray-600 dark:text-[#818181] mb-4">
				Rewards by Pool
			</h3>
			<div className="space-y-3">
				{pools.map((pool, index) => (
					<div
						key={index}
						className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[15px] p-4 flex justify-between items-center shadow-sm dark:shadow-none"
					>
						<div>
							<div className="font-bold text-gray-900 dark:text-white text-sm">
								{pool.name}
							</div>
							<div className="text-[#00C950] text-xs">
								{pool.reward}
							</div>
						</div>
						<button className="px-4 py-1.5 border border-gray-200 dark:border-[#1F1F1F] rounded-lg text-xs font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#1F1F1F] transition-colors cursor-pointer">
							Claim
						</button>
					</div>
				))}
			</div>
			<p className="text-[10px] text-gray-500 dark:text-[#818181] mt-6 leading-relaxed">
				Rewards are calculated every second based on your stake amount
				and pool APR. Claim anytime with no minimum threshold.
			</p>
		</div>
	);
}
