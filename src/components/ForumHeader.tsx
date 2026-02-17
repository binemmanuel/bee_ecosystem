import ElevatedButton from "./buttons/ElevatedButton";

export default function ForumHeader() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
			<div className="flex items-center gap-4">
				<div className="w-12 h-12 rounded-[15px] border border-[#EDA909] flex items-center justify-center text-[#EDA909] bg-[#EDA9091A]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
					</svg>
				</div>
				<div>
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Community Forum
					</h1>
					<p className="text-gray-600 dark:text-[#818181]">
						Discuss, share, and collaborate with the Bee Ecosystem
						community
					</p>
				</div>
			</div>
			<ElevatedButton>+ New Thread</ElevatedButton>
		</div>
	);
}
