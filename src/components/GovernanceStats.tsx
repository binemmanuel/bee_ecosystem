export default function GovernanceStats() {
	const stats = [
		{
			label: "Voting Model",
			value: "Token-Weighted",
			sub: "1 P-NECTR = 1 Vote",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
					<path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
				</svg>
			),
		},
		{
			label: "Quorum Required",
			value: "10%",
			sub: "Of total supply",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
					<circle cx="9" cy="7" r="4" />
					<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
					<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				</svg>
			),
		},
		{
			label: "Proposal Threshold",
			value: "1,000",
			sub: "P-NECTR to submit",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
					<polyline points="14 2 14 8 20 8" />
					<line x1="16" y1="13" x2="8" y2="13" />
					<line x1="16" y1="17" x2="8" y2="17" />
					<polyline points="10 9 9 9 8 9" />
				</svg>
			),
		},
		{
			label: "Current Phase",
			value: "Pre-Launch",
			sub: "Governance coming Q2 2026",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<polyline points="12 6 12 12 16 14" />
				</svg>
			),
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{stats.map((stat, index) => (
				<div
					key={index}
					className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[15px] p-5 flex items-start gap-4 shadow-sm dark:shadow-none"
				>
					<div className="w-10 h-10 rounded-[10px] bg-[#EDA9091A] flex items-center justify-center text-[#EDA909] shrink-0 border border-[#EDA90933]">
						{stat.icon}
					</div>
					<div>
						<div className="text-xs text-gray-500 dark:text-[#818181] mb-1">
							{stat.label}
						</div>
						<div className="text-lg font-bold text-gray-900 dark:text-white mb-0.5">
							{stat.value}
						</div>
						<div className="text-xs text-gray-500 dark:text-[#818181]">
							{stat.sub}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
