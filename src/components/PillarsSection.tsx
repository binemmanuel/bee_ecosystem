import Image from "next/image";

export default function PillarsSection() {
	return (
		<section className="py-32.5 font-['Geist'] tracking-[0] flex flex-col justify-center align-center">
			<h3 className=" font-bold text-[40px] leading-12.5 text-center">
				Six Pillars of the Ecosystem
			</h3>

			<p className="mt-5 mb-13.5 font-normal text-[20px] leading-[100%] text-center">
				Each pillar represents a core area of sustainable living,
				connected through our
				<br />
				DAO governance.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center align-center">
					<div className="p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px]">
						<div className="bg-[#EDA9091A] w-11 h-11 flex justify-center align-center rounded-[10px] mb-6">
							<Image
								src="/icons/home-icon.svg"
								alt="Home Icon"
								height={18.75}
								width={20}
							/>
						</div>

						<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%]">
							Bee Homes
						</h3>

						<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
							Sustainable housing solutions powered by community
							ownership and smart contracts
						</p>
					</div>
				</div>

				<div className="flex justify-center align-center">
					<div className="p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px]">
						<div className="bg-[#2B7FFF1A] w-11 h-11 flex justify-center align-center rounded-[10px] mb-6">
							<Image
								src="/icons/building-icon.svg"
								alt="Building Icon"
								height={18.75}
								width={20}
							/>
						</div>

						<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%]">
							Bee Rentals
						</h3>

						<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
							Decentralized rental marketplace with transparent
							pricing and instant settlements
						</p>
					</div>
				</div>

				<div className="flex justify-center align-center">
					<div className="p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px]">
						<div className="bg-[#00C9501A] w-11 h-11 flex justify-center align-center rounded-[10px] mb-6">
							<Image
								src="/icons/flash-icon.svg"
								alt="Flash Icon"
								height={18.75}
								width={20}
							/>
						</div>

						<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%]">
							Bee Energy
						</h3>

						<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
							Renewable energy trading and green power initiatives
							for the community
						</p>
					</div>
				</div>

				<div className="flex justify-center align-center">
					<div className="p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px]">
						<div className="bg-[#00B8DB1A] w-11 h-11 flex justify-center align-center rounded-[10px] mb-6">
							<Image
								src="/icons/plane-icon.svg"
								alt="Plane Icon"
								height={18.75}
								width={20}
							/>
						</div>

						<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%]">
							Bee Holidays
						</h3>

						<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
							Travel and vacation experiences with tokenized
							rewards and benefits
						</p>
					</div>
				</div>

				<div className="flex justify-center align-center">
					<div className="p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px]">
						<div className="bg-[#00BC7D1A] w-11 h-11 flex justify-center align-center rounded-[10px] mb-6">
							<Image
								src="/icons/leaf-icon.svg"
								alt="Leaf Icon"
								height={18.75}
								width={20}
							/>
						</div>

						<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%]">
							Bee Farms & Gardens
						</h3>

						<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
							Agricultural investments and urban farming projects
							with yield opportunities
						</p>
					</div>
				</div>

				<div className="flex justify-center align-center">
					<div className="p-6 border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0E12] rounded-[15px]">
						<div className="bg-[#AD46FF1A] w-11 h-11 flex justify-center align-center rounded-[10px] mb-6">
							<Image
								src="/icons/graduation-hat-icon.svg"
								alt="Graduation Hat Icon"
								height={18.75}
								width={20}
							/>
						</div>

						<h3 className="mb-6 text-gray-900 dark:text-white font-semibold text-[23px] leading-[100%]">
							Bee Education and Health
						</h3>

						<p className="text-[14px] text-gray-600 dark:text-[#948D8D] leading-5.25">
							Learn-to-earn programs and health initiatives for
							community wellness
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
