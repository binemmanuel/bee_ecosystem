import HeadingAndTagline from "./HeadingAndTagline";
import HeroBackground from "./HeroBackground";
import HeroActions from "./HeroActions";
import NowLivePile from "./NowLivePile";

export default function Hero() {
	return (
		<div className="relative h-[90vh] text-white flex flex-1 items-center justify-center flex-col gap-8.75">
			<HeroBackground />

			<NowLivePile />

			<HeadingAndTagline />

			<HeroActions />
		</div>
	);
}
