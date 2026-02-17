export default function ForumFilters() {
	const filters = [
		"All",
		"Announcements",
		"Presale Q&A",
		"Marketplace",
		"BeeMap Projects",
	];

	return (
		<div className="flex flex-wrap gap-3 mb-8">
			{filters.map((filter, index) => (
				<button
					key={index}
					className={`px-4 py-2 rounded-[10px] text-sm font-medium transition-colors border ${
						index === 0
							? "bg-[#EDA9091A] text-[#EDA909] border-[#EDA909]"
							: "bg-white dark:bg-[#13161A] text-gray-600 dark:text-[#818181] border-gray-200 dark:border-[#1F1F1F] hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600"
					}`}
				>
					{filter}
				</button>
			))}
		</div>
	);
}
