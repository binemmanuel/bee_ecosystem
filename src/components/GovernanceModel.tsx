export default function GovernanceModel() {
	const items = [
		{
			title: "Token-Weighted",
			description:
				"Each P-NECTR token represents one vote. The more tokens you hold, the greater your influence on governance decisions.",
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
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				</svg>
			),
		},
		{
			title: "Quadratic Consideration",
			description:
				"Future iterations may include quadratic voting to balance influence and prevent whale dominance.",
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
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
					<circle cx="9" cy="7" r="4" />
					<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
					<path d="M16 3.13a4 4 0 0 1 0 7.75" />
				</svg>
			),
		},
		{
			title: "Proposal Types",
			description:
				"Treasury allocations, protocol upgrades, partnership approvals, and ecosystem parameter changes.",
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
					<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.143-3-3-.928.857-1.928.857-3 3-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5z" />
					<path d="M15.5 14.5A2.5 2.5 0 0 0 18 12c0-1.38-.5-2-1-3-1.072-2.143-2.072-2.143-3-3-.928.857-1.928.857-3 3-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5z" />
					<line x1="12" y1="22" x2="12" y2="16" />
				</svg>
			),
		},
		{
			title: "Execution",
			description:
				"Approved proposals are executed through multi-sig or timelock contracts for security.",
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
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
					<polyline points="22 4 12 14.01 9 11.01" />
				</svg>
			),
		},
	];

	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
			<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
				Governance Model
			</h2>
			<p className="text-gray-600 dark:text-[#818181] text-sm mb-6">
				The Bee Ecosystem DAO employs a transparent, on-chain governance
				system built on Polygon. All token holders can participate in
				shaping the ecosystem&apos;s direction through proposals and
				voting.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{items.map((item, index) => (
					<div
						key={index}
						className="bg-gray-50 dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[15px] p-5"
					>
						<div className="flex items-center gap-2 mb-3">
							<div className="text-[#EDA909]">{item.icon}</div>
							<h3 className="font-bold text-gray-900 dark:text-white text-sm">
								{item.title}
							</h3>
						</div>
						<p className="text-xs text-gray-600 dark:text-[#818181] leading-relaxed">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
