import Image from "next/image";

interface AssetCardProps {
	image: string;
	category: string;
	status: string;
	title: string;
	location: string;
	price: string;
	currency: string;
}

export default function AssetCard({
	image,
	category,
	status,
	title,
	location,
	price,
	currency,
}: AssetCardProps) {
	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] overflow-hidden shadow-sm dark:shadow-none group cursor-pointer">
			<div className="relative h-48 w-full">
				<Image src={image} alt={title} fill className="object-cover" />
				<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
					{category}
				</div>
				<div className="absolute top-4 right-4 bg-[#00C950]/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#00C950] border border-[#00C950]/30">
					{status.toUpperCase()}
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#EDA909] transition-colors">
					{title}
				</h3>
				<div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-[#818181] mb-4">
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						></path>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
					</svg>
					<span>{location}</span>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 rounded-full bg-[#EDA909] flex items-center justify-center">
							<svg
								width="12"
								height="14"
								viewBox="0 0 12 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.66699 1.66699H3.66699V12.3337H7.66699C9.48511 12.3337 11.0003 10.8185 11.0003 9.00033C11.0003 7.18214 9.48511 5.66699 7.66699 5.66699H5.66699"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<span className="text-lg font-bold text-gray-900 dark:text-white">
							{price}
						</span>
						<span className="text-sm text-gray-500 dark:text-[#818181]">
							{currency}
						</span>
					</div>
					<div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-[#818181] group-hover:text-white transition-colors">
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							></path>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							></path>
						</svg>
						<span>View</span>
					</div>
				</div>
			</div>
		</div>
	);
}
