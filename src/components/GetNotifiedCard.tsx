export default function GetNotifiedCard() {
	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
			<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
				Get Notified
			</h3>
			<p className="text-xs text-gray-600 dark:text-[#818181] mb-4">
				Be the first to know when voting opens.
			</p>
			<input
				type="email"
				placeholder="your@email.com"
				className="w-full bg-gray-50 dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[10px] p-3 text-sm text-gray-900 dark:text-white mb-3 focus:outline-none focus:border-[#EDA909]"
			/>
			<button className="w-full py-3 border border-gray-200 dark:border-[#1F1F1F] text-gray-900 dark:text-white font-bold rounded-[10px] text-sm hover:bg-gray-100 dark:hover:bg-[#1F1F1F] transition-colors flex items-center justify-center gap-2">
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
					<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
					<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
				</svg>
				Notify Me
			</button>
		</div>
	);
}
