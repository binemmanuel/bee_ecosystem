import Image from "next/image";

export default function HeroBackground() {
	return (
		<>
			<div
				className="absolute inset-0 -z-10"
				style={{
					background:
						"linear-gradient(99.85deg, rgba(0, 0, 0, 0.16) 10.1%, rgba(0, 0, 0, 0.56) 50%, rgba(0, 0, 0, 0.8) 100%)",
				}}
			/>
			<Image
				src="/background.png"
				alt="Background"
				fill
				className="object-cover -z-20 "
				priority
			/>
		</>
	);
}
