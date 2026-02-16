import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-black text-white pt-20 pb-10 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row justify-between gap-12">
					<div className="max-w-sm">
						<div className="flex items-center gap-2.5 mb-6">
							<Image
								src="/icons/codepen.svg"
								alt="Bee DAO Logo"
								height={32}
								width={32}
							/>
							<h3 className="font-['Geist'] font-bold text-[25px] leading-[100%] tracking-[0]">
								Bee DAO
							</h3>
						</div>
						<p className="font-['Geist'] font-normal text-[15px] text-[#818181] leading-6 tracking-[0]">
							Building a decentralized ecosystem for sustainable
							living through community governance.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
						<div>
							<h4 className="font-['Geist'] font-bold text-[18px] mb-6">
								Product
							</h4>
							<ul className="space-y-4">
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Presale
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Marketplace
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										BeeMap
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Forum
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-['Geist'] font-bold text-[18px] mb-6">
								Governance
							</h4>
							<ul className="space-y-4">
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Overview
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Proposals
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Voting
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Treasury
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-['Geist'] font-bold text-[18px] mb-6">
								Resources
							</h4>
							<ul className="space-y-4">
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Whitepaper
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Roadmap
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										FAQ
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-['Geist'] font-bold text-[18px] mb-6">
								Legal
							</h4>
							<ul className="space-y-4">
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Terms of Service
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										href="#"
										className="font-['Geist'] font-normal text-[15px] text-[#818181] hover:text-white transition-colors"
									>
										Cookie Policy
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-[#1F1F1F] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="font-['Geist'] font-normal text-[14px] text-[#818181]">
						© 2025 Bee Ecosystem DAO. All rights reserved
					</p>
					<p className="font-['Geist'] font-normal text-[14px] text-[#818181]">
						Built with transparency on the blockchain
					</p>
				</div>
			</div>
		</footer>
	);
}
