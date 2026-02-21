import Link from "next/link";

export default function OutlinedButton({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Link
			href={""}
			className="w-full md:w-auto px-4.5 py-3  text-[15px] font-semibold rounded-[10px] border border-white text-white hover:bg-[#EDA909] hover:border-[#EDA909] hover:text-black cursor-pointer"
		>
			{children}
		</Link>
	);
}
