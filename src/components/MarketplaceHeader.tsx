export default function MarketplaceHeader() {
	return (
		<div className="mb-8">
			<div className="flex items-center gap-4 mb-2">
				<div className="w-12 h-12 rounded-[15px] bg-[#EDA9091A] border border-[#EDA909] flex items-center justify-center text-[#EDA909]">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M3 6H21"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div>
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Marketplace
					</h1>
					<p className="text-gray-600 dark:text-[#818181]">
						Discover and trade tokenized real-world assets
					</p>
				</div>
			</div>
			<div className="flex items-center gap-2 text-sm text-[#00C950]">
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
					<polyline points="20 6 9 17 4 12" />
				</svg>
				<span>12 assets Available</span>
			</div>
		</div>
	);
}
