export default function RewardsPot() {
	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 mb-6 relative overflow-hidden shadow-sm dark:shadow-none">
			{/* Hexagon background pattern simulation */}
			<div
				className="absolute inset-0 opacity-10 pointer-events-none"
				style={{
					backgroundImage:
						"radial-gradient(circle at 2px 2px, #EDA909 1px, transparent 0)",
					backgroundSize: "40px 40px",
				}}
			></div>

			<div className="flex justify-between items-start mb-8 relative z-10">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full bg-[#EDA9091A] flex items-center justify-center text-[#EDA909]">
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
							<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<path d="M16 10a4 4 0 0 1-8 0" />
						</svg>
					</div>
					<span className="font-bold text-gray-900 dark:text-white">
						Rewards Pot
					</span>
				</div>
				<div className="px-2 py-1 rounded border border-[#00C950] text-[#00C950] text-[10px] font-bold flex items-center gap-1">
					<span className="w-1.5 h-1.5 rounded-full bg-[#00C950] animate-pulse"></span>
					Earning
				</div>
			</div>

			<div className="text-center mb-8 relative z-10">
				<div className="text-gray-600 dark:text-[#818181] text-sm mb-1">
					Total Pending
				</div>
				<div className="text-3xl font-bold text-[#00C950] mb-1">
					220.5510{" "}
					<span className="text-sm text-gray-500 dark:text-[#818181] font-normal">
						P-NECTR
					</span>
				</div>
				<div className="text-xs text-[#00C950] flex items-center justify-center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="10"
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
					Rewards accumulating...
				</div>
			</div>

			<button className="w-full py-3 bg-[#00C950] hover:bg-[#00B045] text-black font-bold rounded-[10px] transition-colors relative z-10 cursor-pointer">
				Claim All Rewards
			</button>
		</div>
	);
}
