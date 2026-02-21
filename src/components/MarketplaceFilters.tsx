"use client";

import { useState, type ChangeEvent } from "react";

const categories = [
	{ name: "All", icon: null },
	{
		name: "Homes",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.5 10.8333L10 4.16666L17.5 10.8333V17.5C17.5 17.9583 17.3244 18.399 17.0118 18.7117C16.6993 19.0243 16.2587 19.2 15.8333 19.2H4.16667C3.74131 19.2 3.30072 19.0243 2.98816 18.7117C2.67559 18.399 2.5 17.9583 2.5 17.5V10.8333Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.5 19.1667V10H12.5V19.1667"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Rentals",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15 19.1667V4.16669C15 3.70835 14.8244 3.26776 14.5118 2.9552C14.1993 2.64264 13.7587 2.46699 13.3333 2.46699H6.66667C6.24131 2.46699 5.80072 2.64264 5.48816 2.9552C5.17559 3.26776 5 3.70835 5 4.16669V19.1667"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.5 19.167H17.5"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.33331 7.5H11.6666"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.33331 11.667H11.6666"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.33331 15.833H11.6666"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Energy",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.8333 1.66699L4.16667 11.667H10L9.16667 18.3337L15.8333 8.33366H10L10.8333 1.66699Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Holidays",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10 14.167C12.3012 14.167 14.1667 12.3015 14.1667 10.0003C14.1667 7.69911 12.3012 5.83366 10 5.83366C7.69883 5.83366 5.83334 7.69911 5.83334 10.0003C5.83334 12.3015 7.69883 14.167 10 14.167Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10 0.833664V2.50033"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10 17.5V19.1667"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.55835 3.55867L4.73335 4.73367"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15.2666 15.267L16.4416 16.442"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M0.833313 10H2.49998"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.5 10H19.1667"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.55835 16.442L4.73335 15.267"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15.2666 4.73367L16.4416 3.55867"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Farms & Gardens",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17.5 10.8337C17.5 14.6028 14.1025 17.5003 10 17.5003C5.8975 17.5003 2.5 14.6028 2.5 10.8337C2.5 7.06453 7.5 1.66699 10 1.66699C12.5 1.66699 17.5 7.06453 17.5 10.8337Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.5 11.667C12.5 10.2826 11.3807 9.16699 10 9.16699C8.61929 9.16699 7.5 10.2826 7.5 11.667C7.5 12.7279 8.42143 14.417 10 16.667C11.5786 14.417 12.5 12.7279 12.5 11.667Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		name: "Education & Health",
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10 18.35L8.55 17.03C4.4 13.39 1.5 10.81 1.5 7.75C1.5 5.32 3.32 3.5 5.75 3.5C7.24 3.5 8.64 4.23 9.5 5.35H10.5C11.36 4.23 12.76 3.5 14.25 3.5C16.68 3.5 18.5 5.32 18.5 7.75C18.5 10.81 15.6 13.39 11.45 17.04L10 18.35Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];

export default function MarketplaceFilters() {
	const [activeCategory, setActiveCategory] = useState("All");
	const [priceRange, setPriceRange] = useState([0, 50000]);

	const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(Number(e.target.value), priceRange[1] - 1000);
		setPriceRange([value, priceRange[1]]);
	};

	const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Math.max(Number(e.target.value), priceRange[0] + 1000);
		setPriceRange([priceRange[0], value]);
	};

	return (
		<aside className="w-full lg:w-80 shrink-0">
			<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none sticky top-24">
				<h3 className="text-lg font-bold mb-6">Filters</h3>

				<div className="mb-8">
					<h4 className="text-sm font-medium text-gray-600 dark:text-[#818181] mb-3">
						Category
					</h4>
					<div className="grid grid-cols-2 gap-2">
						{categories.map((category) => (
							<button
								key={category.name}
								onClick={() => setActiveCategory(category.name)}
								className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-colors border ${
									activeCategory === category.name
										? "bg-[#EDA9091A] text-black border-[#EDA909]"
										: "bg-gray-50 dark:bg-[#13161A] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#1F1F1F] hover:bg-gray-100 dark:hover:bg-gray-800"
								}`}
							>
								{category.icon}
								{category.name}
							</button>
						))}
					</div>
				</div>

				<div className="mb-8">
					<h4 className="text-sm font-medium text-gray-600 dark:text-[#818181] mb-4">
						Price Range (P-NECTR)
					</h4>
					<div className="relative h-5 w-full">
						<div className="absolute top-2 left-0 right-0 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
						<div
							className="absolute top-2 h-1.5 bg-[#EDA909] rounded-full"
							style={{
								left: `${(priceRange[0] / 50000) * 100}%`,
								right: `${100 - (priceRange[1] / 50000) * 100}%`,
							}}
						></div>
						<input
							type="range"
							min="0"
							max="50000"
							value={priceRange[0]}
							onChange={handleMinChange}
							className="absolute top-0 left-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EDA909] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white dark:[&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto z-20"
						/>
						<input
							type="range"
							min="0"
							max="50000"
							value={priceRange[1]}
							onChange={handleMaxChange}
							className="absolute top-0 left-0 w-full h-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#EDA909] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white dark:[&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto z-20"
						/>
					</div>
					<div className="flex justify-between text-xs text-gray-500 dark:text-[#818181] mt-2">
						<span>{priceRange[0].toLocaleString()}</span>
						<span>{priceRange[1].toLocaleString()}</span>
					</div>
				</div>

				<div>
					<h4 className="text-sm font-medium text-gray-600 dark:text-[#818181] mb-3">
						Location
					</h4>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								></path>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
						</div>
						<input
							type="text"
							placeholder="Search location..."
							className="w-full bg-gray-50 dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[10px] p-3 pl-10 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#EDA909]"
						/>
					</div>
				</div>
			</div>
		</aside>
	);
}
