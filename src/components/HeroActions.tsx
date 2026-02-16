import ElevatedButton from "./buttons/ElevatedButton";
import OutlinedButton from "./buttons/OutlinedButton";

export default function HeroActions() {
	return (
		<div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-8 md:mt-12.5 justify-center items-center w-full px-4 md:px-0">
			<ElevatedButton label="Join Presale" />

			<OutlinedButton label="Explore Marketplace" />

			<OutlinedButton label="Participate in DAO" />
		</div>
	);
}
