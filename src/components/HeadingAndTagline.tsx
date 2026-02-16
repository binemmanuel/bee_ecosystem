export default function HeadingAndTagline() {
	return (
		<div className="gap-4 md:gap-8.5 flex flex-col px-4 md:px-0">
			<h1 className="text-5xl md:text-[100px] font-bold font-['Geist'] leading-tight md:leading-30 tracking-[0] text-center">
				The Future of <br className="hidden md:block" />
				<span className="text-[#EDA909]">Decentralized Living</span>
			</h1>

			<h2 className="text-base md:text-[22px] font-medium font-['Geist'] leading-normal md:leading-8.75 tracking-[0] text-center max-w-2xl md:max-w-none mx-auto">
				Bee Ecosystem DAO connects sustainable living with
				<br className="hidden md:block" />
				blockchain technology. From eco-homes to renewable energy, join
				a community
				<br className="hidden md:block" />
				building the future together.
			</h2>
		</div>
	);
}
