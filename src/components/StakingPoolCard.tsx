import ElevatedButton from "./buttons/ElevatedButton";
import Image from "next/image";

interface StakingPoolCardProps {
	image: string;
	category: string;
	apr: string;
	title: string;
	minStake: string;
	lockPeriod: string;
	tvl: string;
	location: string;
	locationValue: string;
	pendingRewards: string;
}

export default function StakingPoolCard({
	image,
	category,
	apr,
	title,
	minStake,
	lockPeriod,
	tvl,
	location,
	locationValue,
	pendingRewards,
}: StakingPoolCardProps) {
	return (
		<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] overflow-hidden shadow-sm dark:shadow-none">
			<div className="relative h-48 w-full">
				<Image src={image} alt={title} fill className="object-cover" />
				<div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-[#1F1F1F]">
					{category}
				</div>
				<div className="absolute top-4 right-4 bg-[#00C950]/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#00C950] border border-[#00C950]/30 flex items-center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
						<polyline points="17 6 23 6 23 12" />
					</svg>
					{apr} APR
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
					{title}
				</h3>

				<div className="flex gap-4 text-xs text-gray-600 dark:text-[#818181] mb-6">
					<div className="flex items-center gap-1">
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
							<path d="M12 6v6l4 2" />
						</svg>
						Min: {minStake}
					</div>
					<div className="flex items-center gap-1">
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
							<rect
								x="3"
								y="11"
								width="18"
								height="11"
								rx="2"
								ry="2"
							/>
							<path d="M7 11V7a5 5 0 0 1 10 0v4" />
						</svg>
						{lockPeriod} lock
					</div>
				</div>

				<div className="space-y-3 mb-6">
					<div className="flex justify-between text-sm">
						<span className="text-gray-600 dark:text-[#818181]">
							Total Value Locked
						</span>
						<span className="text-gray-900 dark:text-white font-medium">
							{tvl}
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-600 dark:text-[#818181]">
							{location}
						</span>
						<span className="text-[#EDA909] font-medium">
							{locationValue}
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-600 dark:text-[#818181] flex items-center gap-1">
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
								<rect
									x="2"
									y="7"
									width="20"
									height="14"
									rx="2"
									ry="2"
								/>
								<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
							</svg>
							Pending Rewards
						</span>
						<span className="text-[#00C950] font-medium">
							{pendingRewards}
						</span>
					</div>
				</div>

				<div className="flex gap-4">
					<ElevatedButton className="flex-1 font-bold">
						Add More
					</ElevatedButton>

					<button className="flex-1 py-3 border border-[#00C950] rounded-[10px] text-[#00C950] font-semibold hover:bg-[#00C9501A] transition-colors cursor-pointer">
						Claim
					</button>
				</div>
			</div>
		</div>
	);
}
