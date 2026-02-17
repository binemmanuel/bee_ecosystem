export default function RecentProposals() {
	const proposals = [
		{
			id: "BEP-001",
			date: "15/12/2025",
			title: "Treasury Allocation for Bee Homes Development Fund",
			status: "Passed",
			statusColor: "text-[#00C950] bg-[#00C9501A] border-[#00C95033]",
			votes: "1.25M",
			endDate: "August 0.25M",
		},
		{
			id: "BEP-001",
			date: "08/01/2026",
			title: "Partnership with Green Energy Collective",
			status: "Active",
			statusColor: "text-[#EDA909] bg-[#EDA9091A] border-[#EDA90933]",
			votes: "1.25M",
			endDate: "August 0.25M",
		},
		{
			id: "BEP-001",
			date: "08/01/2026",
			title: "Staking Rewards Rate A",
			status: "Pending",
			statusColor: "text-[#818181] bg-[#8181811A] border-[#81818133]",
			votes: null,
			endDate: null,
		},
		{
			id: "BEP-001",
			date: "08/01/2026",
			title: "Expansion of BeeMap to Southeast Asia",
			status: "Rejected",
			statusColor: "text-[#FF3B30] bg-[#FF3B301A] border-[#FF3B3033]",
			votes: "1.25M",
			endDate: "August 0.25M",
		},
	];

	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-bold text-gray-900 dark:text-white">
					Recent Proposals
				</h2>
				<button className="text-xs text-gray-500 dark:text-[#818181] flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors">
					View All on Snapshot
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
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</button>
			</div>

			<div className="space-y-4">
				{proposals.map((proposal, index) => (
					<div
						key={index}
						className="bg-gray-50 dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[15px] p-4 flex flex-col md:flex-row items-start md:items-center gap-4"
					>
						<div className="w-10 h-10 rounded-[10px] bg-[#EDA9091A] flex items-center justify-center text-[#EDA909] shrink-0">
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
								<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
								<polyline points="14 2 14 8 20 8" />
								<line x1="16" y1="13" x2="8" y2="13" />
								<line x1="16" y1="17" x2="8" y2="17" />
								<line x1="10" y1="9" x2="8" y2="9" />
							</svg>
						</div>
						<div className="flex-1 w-full">
							<div className="flex flex-wrap items-center gap-3 mb-1">
								<span className="text-xs text-gray-500 dark:text-[#818181]">
									{proposal.id} {proposal.date}
								</span>
								<span
									className={`text-[10px] px-2 py-0.5 rounded border font-bold flex items-center gap-1 ${proposal.statusColor}`}
								>
									{proposal.status === "Passed" && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="10"
											height="10"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points="20 6 9 17 4 12" />
										</svg>
									)}
									{proposal.status === "Active" && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="10"
											height="10"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
									)}
									{proposal.status === "Pending" && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="10"
											height="10"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
									)}
									{proposal.status === "Rejected" && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="10"
											height="10"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<line
												x1="18"
												y1="6"
												x2="6"
												y2="18"
											/>
											<line
												x1="6"
												y1="6"
												x2="18"
												y2="18"
											/>
										</svg>
									)}
									{proposal.status}
								</span>
							</div>
							<h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">
								{proposal.title}
							</h3>
							{proposal.votes && (
								<div className="w-full bg-gray-200 dark:bg-[#1F1F1F] rounded-full h-1.5 mb-1">
									<div
										className={`h-1.5 rounded-full ${proposal.status === "Rejected" ? "bg-[#FF3B30]" : "bg-[#00C950]"}`}
										style={{ width: "60%" }}
									></div>
								</div>
							)}
							{proposal.votes && (
								<div className="flex justify-between text-[10px] text-gray-500 dark:text-[#818181]">
									<span>For: {proposal.votes}</span>
									<span>{proposal.endDate}</span>
								</div>
							)}
						</div>
						<button className="text-gray-400 dark:text-[#818181] hover:text-gray-900 dark:hover:text-white self-start md:self-center">
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
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
