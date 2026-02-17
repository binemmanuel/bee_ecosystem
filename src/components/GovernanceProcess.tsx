export default function GovernanceProcess() {
	const steps = [
		{
			step: "Step 1",
			duration: "1-3 days",
			title: "Draft Proposal",
			description:
				"Community member creates a proposal with title, description, and requested action. Requires 1,000 P-NECTR to submit.",
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
					<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
				</svg>
			),
		},
		{
			step: "Step 2",
			duration: "5 days",
			title: "Discussion Period",
			description:
				"Community discusses the proposal in the forum. Feedback is incorporated and the proposal may be refined.",
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
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
				</svg>
			),
		},
		{
			step: "Step 3",
			duration: "3 days",
			title: "Voting Period",
			description:
				"Token holders cast their votes. Proposal passes if it reaches quorum (10%) and majority approval.",
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
					<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
					<line x1="8" y1="21" x2="16" y2="21" />
					<line x1="12" y1="17" x2="12" y2="21" />
				</svg>
			),
		},
		{
			step: "Step 4",
			duration: "2 day timelock",
			title: "Execution",
			description:
				"Approved proposals enter a timelock period, then are executed on-chain through the DAO multi-sig.",
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
					<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
					<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
					<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
					<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
				</svg>
			),
		},
	];

	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
			<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
				Governance Process
			</h2>
			<div className="space-y-6">
				{steps.map((step, index) => (
					<div key={index} className="flex gap-4">
						<div className="shrink-0 w-10 h-10 rounded-full bg-[#EDA9091A] border border-[#EDA909] flex items-center justify-center text-[#EDA909]">
							{step.icon}
						</div>
						<div>
							<div className="flex items-center gap-2 mb-1">
								<span className="text-xs font-bold text-[#EDA909] bg-[#EDA9091A] px-2 py-0.5 rounded">
									{step.step}
								</span>
								<span className="text-xs text-gray-500 dark:text-[#818181]">
									{step.duration}
								</span>
							</div>
							<h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
								{step.title}
							</h3>
							<p className="text-xs text-gray-600 dark:text-[#818181] leading-relaxed">
								{step.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
