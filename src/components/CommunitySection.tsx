import ElevatedButton from "./buttons/ElevatedButton";
import Image from "next/image";

export default function CommunitySection() {
	return (
		<section className="flex flex-col justify-center items-center py-16 md:py-32.5 gap-5 px-4">
			<div className="flex justify-center items-center">
				<div className="mb-5 flex gap-[9.5px] text-[#EDA909] text-[12px] border border-[#EDA909] py-1.25 px-2.5 rounded-[10px]">
					Governance
				</div>
			</div>

			<h3 className="text-[28px] font-bold text-center">Join the Hive</h3>

			<p className="text-[17px] text-[#818181] text-center">
				Connect with fellow community members, participate in
				discussions, and stay
				<br />
				updated on the latest developments.
			</p>

			<div className="mt-10 md:mt-17.25 flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl mx-auto gap-6">
				<div className="group flex-1 p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px] hover:border-[#EDA909] transition-colors duration-300">
					<div className="bg-[#EDA9091A] w-11 h-11 flex justify-center items-center rounded-[10px] mb-6">
						<Image
							src="/icons/chat-icon.svg"
							alt="Chat Icon"
							height={18.75}
							width={20}
						/>
					</div>

					<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%] flex items-center gap-2">
						Community Forum
						<Image
							src="/icons/arrow-icon.svg"
							alt="Arrow Icon"
							height={9.3}
							width={9.3}
							className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</h3>

					<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
						Discuss proposals, share ideas, and engage with the
						community in our decentralized forum.
					</p>

					<button
						type="button"
						className="text-[15px] text-center font-semibold border border-[#1F1F1F] w-full mt-5 py-3 rounded-[10px] hover:bg-[#EDA909] hover:text-black transition-colors cursor-pointer"
					>
						Visit Forum
					</button>
				</div>

				<div className="group flex-1 p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px] hover:border-[#EDA909] transition-colors duration-300">
					<div className="bg-[#EDA9091A] w-11 h-11 flex justify-center items-center rounded-[10px] mb-6">
						<Image
							src="/icons/chat-conversation-icon.svg"
							alt="Chat Conversation Icon"
							height={18.75}
							width={20}
						/>
					</div>

					<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%] flex items-center gap-2">
						Live Chat
						<Image
							src="/icons/arrow-icon.svg"
							alt="Arrow Icon"
							height={9.3}
							width={9.3}
							className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</h3>

					<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
						Join real-time conversations with community members and
						get instant support.
					</p>

					<button
						type="button"
						className="text-[15px] text-center font-semibold border border-[#1F1F1F] w-full mt-5 py-3 rounded-[10px] hover:bg-[#EDA909] hover:text-black transition-colors cursor-pointer"
					>
						Join Discord
					</button>
				</div>

				<div className="group flex-1 p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px] hover:border-[#EDA909] transition-colors duration-300">
					<div className="bg-[#EDA9091A] w-11 h-11 flex justify-center items-center rounded-[10px] mb-6">
						<Image
							src="/icons/send-icon.svg"
							alt="Send Icon"
							height={18.75}
							width={20}
						/>
					</div>

					<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%] flex items-center gap-2">
						Newsletter
						<Image
							src="/icons/arrow-icon.svg"
							alt="Arrow Icon"
							height={9.3}
							width={9.3}
							className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</h3>

					<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
						Get weekly updates on governance, new features, and
						ecosystem news.
					</p>

					<div className="flex flex-col xl:flex-row gap-3 mt-5">
						<input
							type="email"
							className="w-full border border-[#1F1F1F] p-3 rounded-[10px] bg-transparent"
							placeholder="Enter your email"
						/>

						<ElevatedButton className="md:w-full xl:w-auto">
							Subscribe
						</ElevatedButton>
					</div>
				</div>
			</div>
		</section>
	);
}
