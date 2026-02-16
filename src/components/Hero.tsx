import HeadingAndTagline from "./HeadingAndTagline";
import HeroActions from "./HeroActions";
import HeroBackground from "./HeroBackground";
import NowLivePile from "./NowLivePile";

export default function Hero() {
	return (
		<div className="h-[90vh] text-white flex flex-1 items-center justify-center flex-col gap-8.75">
			<HeroBackground />

			<NowLivePile />

			<HeadingAndTagline />

			<HeroActions />
		</div>
	);
}
