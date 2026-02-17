export default function VotingPowerCard() {
	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
			<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
				Your Voting Power
			</h3>
			<div className="bg-gray-50 dark:bg-[#13161A] rounded-[10px] p-6 text-center mb-4">
				<div className="text-2xl font-bold text-gray-400 dark:text-[#818181] mb-1">
					--
				</div>
				<div className="text-xs text-gray-500 dark:text-[#818181]">
					P-NECTR Balance
				</div>
			</div>
			<p className="text-[10px] text-center text-gray-500 dark:text-[#818181] mb-4">
				Connect your wallet and hold P-NECTR to gain voting power.
			</p>
			<button className="w-full py-3 border border-gray-200 dark:border-[#1F1F1F] text-gray-400 dark:text-[#818181] font-bold rounded-[10px] text-sm cursor-not-allowed flex items-center justify-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
					<path d="M7 11V7a5 5 0 0 1 10 0v4" />
				</svg>
				Delegate Votes (Coming Soon)
			</button>
		</div>
	);
}
