export default function ElevatedButton({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<button
			type="button"
			className={`w-full md:w-auto px-4.5 py-3 bg-[#EDA909] text-[15px] font-semibold rounded-[10px] text-black flex justify-center items-center gap-2.5 cursor-pointer ${className && className}`}
		>
			{children}
		</button>
	);
}
