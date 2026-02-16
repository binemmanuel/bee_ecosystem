export default function OutlinedButton({ label }: { label: string }) {
	return (
		<button
			type="button"
			className="w-full md:w-auto px-4.5 py-3  text-[15px] font-semibold rounded-[10px] border border-white text-white"
		>
			{label}
		</button>
	);
}
