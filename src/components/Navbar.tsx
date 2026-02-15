"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
	{ name: "Presale", href: "#" },
	{ name: "Staking", href: "#" },
	{ name: "BeeMap", href: "#" },
	{ name: "Forum", href: "#" },
	{ name: "Governance", href: "#" },
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);

	return (
		<nav className="shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="shrink-0 flex items-center">
						<span className="font-bold text-xl">
							Bee Ecosystem DAO
						</span>
					</div>

					<div className="hidden md:flex md:items-center md:gap-x-6 lg:gap-x-12 xl:gap-x-28">
						<div>
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="hover:text-[#EDA909] px-4.5 py-2.5 text-sm font-medium transition-colors text-[15px]"
								>
									{item.name}
								</a>
							))}
						</div>

						<button
							type="button"
							className="rounded-[10px] px-4.5 py-3 gap-2.5 bg-[#EDA909] text-black font-bold flex items-center justify-center cursor-pointer"
						>
							Connect Wallet
						</button>

						<div className="relative">
							<button
								onClick={() => setIsLangOpen(!isLangOpen)}
								className="flex items-center gap-2  hover:text-[#EDA909] font-medium"
							>
								<Image
									src="/globe-new.svg"
									alt="Globe"
									width={24}
									height={24}
									className="w-6 h-6 text-white"
								/>
								<span>EN</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</button>

							{isLangOpen && (
								<div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										EN
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										ES
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										FR
									</a>
								</div>
							)}
						</div>
					</div>
					<div className="flex items-center md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
							aria-controls="mobile-menu"
							aria-expanded={isMenuOpen}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d={
										isMenuOpen
											? "M6 18L18 6M6 6l12 12"
											: "M4 6h16M4 12h16M4 18h16"
									}
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="hover:text-[#EDA909] block px-3 py-2 rounded-md text-base font-medium"
							>
								{item.name}
							</a>
						))}
						<button
							type="button"
							className="w-full text-left hover:text-[#EDA909] block px-3 py-2 rounded-md text-base font-medium"
						>
							Connect Wallet
						</button>
						<button
							type="button"
							className="w-full text-left hover:text-[#EDA909] flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
						>
							<Image
								src="/globe-new.svg"
								alt="Globe"
								width={20}
								height={20}
								className="w-5 h-5"
							/>
							<span>EN</span>
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
