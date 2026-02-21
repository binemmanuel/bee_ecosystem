import Link from "next/link";

export default function ElevatedButton({
	children,
	className,
	href,
}: {
	children: React.ReactNode;
	className?: string;
	href?: string;
}) {
	if (href) {
		return (
			<Link
				className={`w-full md:w-auto px-4.5 py-3 bg-[#EDA909] text-[15px] font-semibold rounded-[10px] text-black flex justify-center items-center gap-2.5 cursor-pointer ${className && className}`}
				href={href}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			type="button"
			className={`w-full md:w-auto px-4.5 py-3 bg-[#EDA909] text-[15px] font-semibold rounded-[10px] text-black flex justify-center items-center gap-2.5 cursor-pointer ${className && className}`}
		>
			{children}
		</button>
	);
}
