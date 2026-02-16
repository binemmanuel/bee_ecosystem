import ElevatedButton from "@/components/buttons/ElevatedButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import Image from "next/image";

export default function GovernanceCTA() {
	return (
		<div className="relative flex justify-center items-center py-30.75 px-4">
			<div
				className="absolute inset-0 -z-10"
				style={{
					background:
						"linear-gradient(98.31deg, rgba(0, 0, 0, 0.69) 0%, #000000 100.62%)",
				}}
			/>

			<Image
				src="/background-1.png"
				alt="Background"
				fill
				className="object-cover -z-20"
			/>

			<div className="bg-[#0A0E12] border p-6 border-[#1F1F1F] w-full max-w-246 rounded-[20px]">
				<div className="mb-5 flex gap-[9.5px] text-[#EDA909] text-[12px]">
					<Image
						src="/icons/check-square.svg"
						alt="checkbox"
						height={24}
						width={24}
					/>
					<div className="border border-[#EDA909] py-1.25 px-2.5 rounded-[10px]">
						Governance
					</div>
				</div>

				<h3 className="font-['Geist'] font-bold text-[28px] leading-[100%] tracking-[0] mb-4">
					Shape the Future of Bee Ecosystem
				</h3>

				<p className="font-['Geist'] font-normal text-[17px] text-[#818181] leading-[100%] tracking-[0]">
					Participate in decentralized decision-making. Your P-NECTR
					tokens give you voting power on proposals, treasury
					allocation, and ecosystem development.
				</p>

				<div className="flex flex-col md:flex-row mt-9 gap-6">
					<div className="flex justify-center items-center gap-2.5 bg-[#13161A] p-5 rounded-[10px] w-full">
						<div className="bg-[#EDA9091A] h-10 w-10 flex justify-center items-center rounded-lg">
							<Image
								src="/icons/check-square.svg"
								alt="checkbox"
								height={24}
								width={24}
							/>
						</div>

						<div className="flex flex-col gap-px">
							<h4 className="text-[#818181] text-[14px]">
								Governance Model
							</h4>
							<p className="text-[18px]">Token-Weighted Voting</p>
						</div>
					</div>

					<div className="flex justify-center items-center gap-2.5 bg-[#13161A] p-5 rounded-[10px] w-full">
						<div className="bg-[#EDA9091A] h-10 w-10 flex justify-center items-center rounded-lg">
							<Image
								src="/icons/file.svg"
								alt="checkbox"
								height={24}
								width={24}
							/>
						</div>

						<div className="flex flex-col gap-px">
							<h4 className="text-[#818181] text-[14px]">
								Proposal Lifecycle
							</h4>
							<p className="text-[18px]">
								Submission to Execution
							</p>
						</div>
					</div>

					<div className="flex justify-center items-center gap-2.5 bg-[#13161A] p-5 rounded-[10px] w-full">
						<div className="bg-[#EDA9091A] h-10 w-10 flex justify-center items-center rounded-lg">
							<Image
								src="/icons/calendar.svg"
								alt="checkbox"
								height={24}
								width={24}
							/>
						</div>

						<div className="flex flex-col gap-px">
							<h4 className="text-[#818181] text-[14px]">
								Voting Period
							</h4>
							<p className="text-[18px]">7-Day Cycle</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-5 mt-6.5">
					<ElevatedButton label="Explore Governance" />
					<OutlinedButton label="View All Proposals" />
				</div>
			</div>
		</div>
	);
}
