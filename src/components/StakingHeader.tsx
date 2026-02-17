export default function StakingHeader() {
	return (
		<div className="mb-8">
			<div className="flex items-center gap-4 mb-2">
				<div className="w-12 h-12 rounded-full bg-[#EDA9091A] border border-[#EDA909] flex items-center justify-center text-[#EDA909]">
					{/* Icon placeholder - coins */}
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
						<circle cx="8" cy="8" r="6" />
						<path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
						<path d="M7 6h1v4" />
						<path d="m16.71 13.88.7.71-2.82 2.82" />
					</svg>
				</div>
				<div>
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Staking & Rewards
					</h1>
					<p className="text-gray-600 dark:text-[#818181]">
						Stake your assets and earn passive income
					</p>
				</div>
			</div>
			<div className="flex gap-6 text-sm">
				<div className="flex items-center gap-2 text-[#00C950]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
						<polyline points="17 6 23 6 23 12" />
					</svg>
					APRs updated in real-time
				</div>
				<div className="flex items-center gap-2 text-[#EDA909]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<rect x="3" y="8" width="18" height="4" rx="1" />
						<path d="M12 8v13" />
						<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
						<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
					</svg>
					Rewards accumulate every second
				</div>
			</div>
		</div>
	);
}
