import Image from "next/image";

export default function ElevatedButton({ label }: { label: string }) {
	return (
		<button
			type="button"
			className="w-full md:w-auto px-4.5 py-3 bg-[#EDA909] text-[15px] font-semibold rounded-[10px] text-black flex justify-center items-center gap-2.5"
		>
			{label}
			<Image
				alt="arrow right"
				src="/arrow-narrow-right.svg"
				height={18}
				width={18}
			/>
		</button>
	);
}
