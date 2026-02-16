import Image from "next/image";

export default function NowLivePile() {
	return (
		<div className="py-2 px-3.75 bg-[#EDA90914] border border-[#EDA909] text-[#EDA909] w-[190] rounded-[20px] text-center flex justify-center gap-2.5">
			<Image src="/ai.svg" alt="Now Live" height={15} width={15} />
			Presale Now Live
		</div>
	);
}
