export default function StakingStats() {
	const stats = [
		{ label: "My Total Staked", value: "13.50k", sub: "P-NECTR" },
		{ label: "Pending Rewards", value: "220.5354", sub: "P-NECTR" },
		{ label: "Total Value Locked", value: "10.58M", sub: "P-NECTR" },
		{ label: "Active Pools", value: "6", sub: "Pools" },
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
			{stats.map((stat, index) => (
				<div
					key={index}
					className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none"
				>
					<div className="text-gray-600 dark:text-[#818181] text-sm mb-2">
						{stat.label}
					</div>
					<div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
						{stat.value}
					</div>
					<div className="text-gray-500 dark:text-[#818181] text-sm">
						{stat.sub}
					</div>
				</div>
			))}
		</div>
	);
}
