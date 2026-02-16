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

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);

	return (
		<nav className="shadow-sm sticky top-0 z-50 bg-white dark:bg-[#05070A] border-b border-b-[#1F1F1F]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="shrink-0 flex items-center gap-2.5">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={32}
							height={40}
						/>
						<span className="font-bold text-[20px] text-black dark:text-white">
							Bee Ecosystem DAO
						</span>
					</div>

					<div className="hidden md:flex md:items-center md:gap-x-6 lg:gap-x-12 xl:gap-x-28">
						<div>
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-gray-700 dark:text-gray-300 hover:text-[#EDA909] px-4.5 py-2.5 text-sm font-medium transition-colors text-[15px]"
								>
									{item.name}
								</a>
							))}
						</div>

						<div className="flex items-center gap-3.75">
							<button
								type="button"
								className="rounded-[10px] px-4.5 py-3 gap-2.5 bg-[#EDA909] text-black font-bold flex items-center justify-center cursor-pointer"
							>
								Connect Wallet
							</button>

							<div className="relative">
								<button
									onClick={() => setIsLangOpen(!isLangOpen)}
									className="rounded-4xl px-2.5 py-1.25 gap-2.5 flex items-center justify-center text-gray-700 dark:text-gray-300 bg-[#0A0E12] hover:text-[#EDA909] font-medium"
								>
									<Image
										src="/icons/globe-new.svg"
										alt="Globe"
										width={24}
										height={24}
										className="w-6 h-6 text-white"
									/>
									<span>EN</span>
								</button>

								{isLangOpen && (
									<div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#EDA909] hover:text-black"
										>
											EN
										</a>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#EDA909] hover:text-black"
										>
											ES
										</a>
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#EDA909] hover:text-black"
										>
											FR
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="flex items-center md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
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
								className="text-gray-700 dark:text-gray-300 hover:text-[#EDA909] block px-3 py-2 rounded-md text-base font-medium"
							>
								{item.name}
							</a>
						))}

						<button
							type="button"
							className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#EDA909] block px-3 py-2 rounded-md text-base font-medium"
						>
							Connect Wallet
						</button>

						<button
							type="button"
							className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#EDA909] flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
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
}
