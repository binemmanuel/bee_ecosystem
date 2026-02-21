import ElevatedButton from "./buttons/ElevatedButton";
import OutlinedButton from "./buttons/OutlinedButton";
import Image from "next/image";

export default function HeroActions() {
	return (
		<div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-8 md:mt-12.5 justify-center items-center w-full px-4 md:px-0">
			<ElevatedButton href={'/presale'}>
				Join Presale
				<Image
					alt="arrow right"
					src="/arrow-narrow-right.svg"
					height={18}
					width={18}
				/>
			</ElevatedButton>

			<OutlinedButton>Explore Marketplace</OutlinedButton>

			<OutlinedButton>Participate in DAO</OutlinedButton>
		</div>
	);
}
