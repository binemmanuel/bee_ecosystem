interface ForumThreadItemProps {
	title: string;
	author: string;
	tag: string;
	tagColor: "yellow" | "purple" | "green" | "blue";
	replies: number;
	time: string;
	isPinned?: boolean;
}

export default function ForumThreadItem({
	title,
	author,
	tag,
	tagColor,
	replies,
	time,
	isPinned,
}: ForumThreadItemProps) {
	const getTagStyles = (color: string) => {
		switch (color) {
			case "yellow":
				return "text-[#EDA909] border-[#EDA909] bg-[#EDA9091A]";
			case "purple":
				return "text-[#AD46FF] border-[#AD46FF] bg-[#AD46FF1A]";
			case "green":
				return "text-[#00C950] border-[#00C950] bg-[#00C9501A]";
			case "blue":
				return "text-[#2B7FFF] border-[#2B7FFF] bg-[#2B7FFF1A]";
			default:
				return "text-gray-500 border-gray-500 bg-gray-500/10";
		}
	};

	return (
		<div className="bg-white dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[15px] p-4 md:p-6 flex gap-4 hover:border-[#EDA909] transition-colors group">
			<div className="shrink-0">
				<div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1F1F1F] flex items-center justify-center text-gray-500 dark:text-[#818181]">
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
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
				</div>
			</div>

			<div className="flex-1 min-w-0">
				<div className="flex items-start justify-between gap-4">
					<div className="flex flex-col gap-1 min-w-0">
						<h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-start gap-2">
							{isPinned && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#EDA909"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="shrink-0 mt-1.5"
								>
									<line x1="12" y1="17" x2="12" y2="22" />
									<path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
								</svg>
							)}
							<span className="wrap-break-word">{title}</span>
						</h3>
						<div className="flex flex-wrap items-center gap-2 text-sm">
							<span className="text-gray-600 dark:text-[#818181]">
								{author}
							</span>
							<span className="text-gray-400 dark:text-[#444]">
								•
							</span>
							<span
								className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getTagStyles(
									tagColor,
								)}`}
							>
								{tag}
							</span>
						</div>
					</div>

					<button className="text-gray-400 dark:text-[#818181] hover:text-gray-900 dark:hover:text-white">
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
							<circle cx="12" cy="12" r="1" />
							<circle cx="12" cy="5" r="1" />
							<circle cx="12" cy="19" r="1" />
						</svg>
					</button>
				</div>

				<div className="flex items-center gap-4 mt-4 text-xs text-gray-500 dark:text-[#818181]">
					<div className="flex items-center gap-1.5">
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
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
						</svg>
						{replies} replies
					</div>
					<div className="flex items-center gap-1.5">
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
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
						{time}
					</div>
				</div>
			</div>
		</div>
	);
}
