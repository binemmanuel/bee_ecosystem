import Image from "next/image";

export default function HeroActions() {
	return (
		<div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-8 md:mt-12.5 justify-center items-center w-full px-4 md:px-0">
			<button
				type="button"
				className="w-full md:w-auto px-4.5 py-3 bg-[#EDA909] text-[15px] font-semibold rounded-[10px] text-black flex justify-center items-center gap-2.5"
			>
				Join Presale
				<Image
					alt="arrow right"
					src="/arrow-narrow-right.svg"
					height={18}
					width={18}
				/>
			</button>

			<OutlinedButton label="Explore Marketplace" />

			<OutlinedButton label="Participate in DAO" />
		</div>
	);
}

function OutlinedButton({ label }: { label: string }) {
	return (
		<button
			type="button"
			className="w-full md:w-auto px-4.5 py-3  text-[15px] font-semibold rounded-[10px] border border-white text-white"
		>
			{label}
		</button>
	);
}
