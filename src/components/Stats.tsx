export default function Stats() {
	return (
		<div className="flex flex-col md:flex-row md:h-45 bg-[#0A0E12] text-white">
			<div className="flex flex-1 flex-col justify-center items-center md:items-end border border-[#1F1F1F] py-6 md:py-0 md:px-26.75 gap-1.5">
				<div className="font-['Geist'] font-bold text-[30px] leading-[100%] tracking-[0] text-center text-[#EDA909]">
					$2.4M
				</div>
				<div className="font-['Geist'] font-normal text-[13px] leading-[100%] tracking-[0] text-center">
					Total Value Locked
				</div>
			</div>

			<div className="flex flex-1 flex-col justify-center items-center border border-[#1F1F1F] py-6 md:py-0 gap-1.5">
				<div className="font-['Geist'] font-bold text-[30px] leading-[100%] tracking-[0] text-center text-[#EDA909]">
					12,849
				</div>
				<div className="font-['Geist'] font-normal text-[13px] leading-[100%] tracking-[0] text-center">
					Community Members
				</div>
			</div>

			<div className="flex flex-1 flex-col justify-center items-center border border-[#1F1F1F] py-6 md:py-0 gap-1.5">
				<div className="font-['Geist'] font-bold text-[30px] leading-[100%] tracking-[0] text-center text-[#EDA909]">
					6
				</div>
				<div className="font-['Geist'] font-normal text-[13px] leading-[100%] tracking-[0] text-center">
					Ecosystem Pillars
				</div>
			</div>

			<div className="flex flex-1 flex-col justify-center items-center md:items-start border border-[#1F1F1F] py-6 md:py-0 md:px-26.75 gap-1.5">
				<div className="font-['Geist'] font-bold text-[30px] leading-[100%] tracking-[0] text-center text-[#EDA909]">
					60%
				</div>
				<div className="font-['Geist'] font-normal text-[13px] leading-[100%] tracking-[0] text-center">
					Presale Progress
				</div>
			</div>
		</div>
	);
}
