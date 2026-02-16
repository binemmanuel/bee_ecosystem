import Image from "next/image";

export default function HeroActions() {
	return (
		<div className="flex gap-5 mt-12.5 justify-center items-center">
			<button
				type="button"
				className="px-4.5 py-3 bg-[#EDA909] text-[15px] font-semibold rounded-[10px] text-black flex justify-center items-center gap-2.5"
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
			className="px-4.5 py-3  text-[15px] font-semibold rounded-[10px] border border-white text-white"
		>
			{label}
		</button>
	);
}
