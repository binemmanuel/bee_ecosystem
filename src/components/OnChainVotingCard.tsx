export default function OnChainVotingCard() {
	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-[#EDA909] rounded-[20px] p-6 shadow-sm dark:shadow-none">
			<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDA9091A] border border-[#EDA909] text-[#EDA909] text-xs font-bold mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
					<line x1="12" y1="9" x2="12" y2="13" />
					<line x1="12" y1="17" x2="12.01" y2="17" />
				</svg>
				Coming Soon
			</div>
			<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
				On-Chain Voting
			</h3>
			<p className="text-xs text-gray-600 dark:text-[#818181] mb-6 leading-relaxed">
				Full governance functionality including proposal creation,
				voting, and delegation will be available after the presale
				concludes.
			</p>

			<div className="space-y-3 mb-6">
				<div className="flex items-center gap-2 text-xs text-gray-600 dark:text-[#818181]">
					<span className="text-[#EDA909]">
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
							<rect
								x="3"
								y="11"
								width="18"
								height="11"
								rx="2"
								ry="2"
							/>
							<path d="M7 11V7a5 5 0 0 1 10 0v4" />
						</svg>
					</span>
					Voting UI disabled until launch
				</div>
				<div className="flex items-center gap-2 text-xs text-gray-600 dark:text-[#818181]">
					<span className="text-[#EDA909]">
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
							<rect
								x="2"
								y="3"
								width="20"
								height="14"
								rx="2"
								ry="2"
							/>
							<line x1="8" y1="21" x2="16" y2="21" />
							<line x1="12" y1="17" x2="12" y2="21" />
						</svg>
					</span>
					Snapshot integration pending
				</div>
			</div>

			<button className="w-full py-3 bg-[#EDA909] text-black font-bold rounded-[10px] text-sm opacity-50 cursor-not-allowed flex items-center justify-center gap-2">
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
				Cast Vote (Coming Q2 2026)
			</button>
		</div>
	);
}
