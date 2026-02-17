import ElevatedButton from "@/components/buttons/ElevatedButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PreSalePage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-['Geist']">
			<Navbar />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				{/* Notification Banner */}
				<div className="bg-white dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[15px] p-4 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 shadow-sm dark:shadow-none">
					<div className="flex items-center gap-4">
						<div className="w-10 h-10 rounded-full bg-[#EDA909] flex items-center justify-center shrink-0">
							<span className="text-xl">👋</span>
						</div>
						<div>
							<h4 className="font-bold text-gray-900 dark:text-white text-[15px]">
								Secure your P-NECTR tokens before public launch!
							</h4>
							<p className="text-sm text-gray-600 dark:text-[#818181]">
								Early supporters receive bonus allocations and
								exclusive access to the Bee Ecosystem.
							</p>
						</div>
					</div>
					<button className="text-gray-500 dark:text-[#818181] hover:text-gray-900 dark:hover:text-white self-end md:self-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
					<h1 className="text-[32px] font-bold text-gray-900 dark:text-white">
						Presale Dashboard
					</h1>
					<div className="flex items-center gap-2 text-[#00C950] bg-[#00C9501A] px-3 py-1 rounded-full text-sm font-medium border border-[#00C95033]">
						<span className="w-2 h-2 rounded-full bg-[#00C950]"></span>
						Live
					</div>
				</div>

				{/* Progress Section */}
				<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 mb-6 shadow-sm dark:shadow-none">
					<div className="flex justify-between items-center mb-4">
						<div className="flex items-center gap-2">
							<span className="font-bold text-gray-900 dark:text-white">
								Presale Progress
							</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								className="stroke-gray-500 dark:stroke-[#818181]"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<line x1="12" y1="16" x2="12" y2="12"></line>
								<line x1="12" y1="8" x2="12.01" y2="8"></line>
							</svg>
						</div>
						<div className="text-2xl font-bold text-gray-900 dark:text-white">
							60.00%
						</div>
					</div>
					<div className="w-full bg-gray-200 dark:bg-[#1F1F1F] rounded-full h-2.5 mb-4">
						<div
							className="bg-[#EDA909] h-2.5 rounded-full"
							style={{ width: "60%" }}
						></div>
					</div>
					<div className="flex flex-col md:flex-row justify-between text-sm text-gray-600 dark:text-[#818181] gap-2">
						<div>
							<span className="block text-gray-900 dark:text-white font-medium">
								24.00M P-NECTR
							</span>
							Sold
						</div>
						<div className="md:text-center">
							<span className="block text-gray-900 dark:text-white font-medium">
								40.00M P-NECTR
							</span>
							Goal
						</div>
						<div className="md:text-right">
							<span className="block text-gray-900 dark:text-white font-medium">
								16.00M P-NECTR
							</span>
							Remaining
						</div>
					</div>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
					<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
						<div className="flex items-center gap-2 text-gray-600 dark:text-[#818181] mb-2 text-sm">
							<span className="text-[#EDA909]">●</span> Total
							Allocation
						</div>
						<div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
							40M
						</div>
						<div className="text-gray-500 dark:text-[#818181] text-sm">
							P-NECTR
						</div>
					</div>
					<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
						<div className="flex items-center gap-2 text-gray-600 dark:text-[#818181] mb-2 text-sm">
							<span className="text-[#2B7FFF]">●</span> Tokens
							Sold
						</div>
						<div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
							2.4M
						</div>
						<div className="text-gray-500 dark:text-[#818181] text-sm">
							60.0%
						</div>
					</div>
					<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
						<div className="flex items-center gap-2 text-gray-600 dark:text-[#818181] mb-2 text-sm">
							<span className="text-[#EDA909]">●</span> Remaining
						</div>
						<div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
							16.0M
						</div>
						<div className="text-gray-500 dark:text-[#818181] text-sm">
							P-NECTR
						</div>
					</div>
					<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
						<div className="flex items-center gap-2 text-gray-600 dark:text-[#818181] mb-2 text-sm">
							<span className="text-[#00C950]">●</span> Current
							Price
						</div>
						<div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
							$0.0500
						</div>
						<div className="text-gray-500 dark:text-[#818181] text-sm">
							per P-NECTR
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Buy Widget */}
					<div className="lg:col-span-2 bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
						<h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
							Buy P-NECTR Tokens
						</h2>
						<p className="text-gray-600 dark:text-[#818181] mb-6 text-sm">
							Purchase Presale tokens at the current rate of $0.05
							per P-NECTR
						</p>

						<div className="mb-4">
							<label className="block text-sm font-medium mb-2 text-gray-600 dark:text-[#818181]">
								Token Amount
							</label>
							<div className="relative">
								<input
									type="text"
									className="w-full bg-gray-50 dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[10px] p-4 text-gray-900 dark:text-white focus:outline-none focus:border-[#EDA909] transition-colors"
									placeholder="0"
								/>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#818181] font-medium">
									P-NECTR
								</span>
							</div>
							<div className="flex justify-between text-xs text-gray-500 dark:text-[#818181] mt-2">
								<span>Available: 16,000,000 P-NECTR</span>
								<button className="text-[#EDA909] border border-[#EDA909] px-1.5 py-0.5 rounded text-[10px]">
									MAX
								</button>
							</div>
						</div>

						<div className="flex justify-center mb-4">
							<button className="text-[#EDA909] hover:text-gray-900 dark:hover:text-white transition-colors">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="12" y1="5" x2="12" y2="19"></line>
									<polyline points="19 12 12 19 5 12"></polyline>
								</svg>
							</button>
						</div>

						<div className="mb-6">
							<label className="block text-sm font-medium mb-2 text-gray-600 dark:text-[#818181]">
								You Pay
							</label>
							<div className="relative">
								<input
									type="text"
									className="w-full bg-gray-50 dark:bg-[#13161A] border border-gray-200 dark:border-[#1F1F1F] rounded-[10px] p-4 text-gray-900 dark:text-white focus:outline-none focus:border-[#EDA909] transition-colors"
									placeholder="$0.00"
								/>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#818181] font-medium">
									USD
								</span>
							</div>
						</div>

						<div className="space-y-3 mb-6 text-sm border-t border-gray-200 dark:border-[#1F1F1F] pt-4">
							<div className="flex justify-between text-gray-600 dark:text-[#818181]">
								<span>Estimated Gas</span>
								<span>---</span>
							</div>
							<div className="flex justify-between text-gray-600 dark:text-[#818181]">
								<span>Slippage Tolerance</span>
								<span className="text-gray-900 dark:text-white">
									0.5%
								</span>
							</div>
						</div>

						<ElevatedButton className="w-full py-4 text-lg font-bold">
							Confirm Purchase
						</ElevatedButton>
						<p className="text-center text-xs text-gray-500 dark:text-[#818181] mt-4">
							By purchasing, you agree to the presale terms and
							conditions
						</p>
					</div>

					{/* Sidebar Widgets */}
					<div className="space-y-6">
						{/* Balance Card */}
						<div className="bg-linear-to-b from-[#FFF8E1] to-white dark:from-[#1F1805] dark:to-[#0A0E12] border border-[#EDA909] rounded-[20px] p-8 text-center relative overflow-hidden shadow-sm dark:shadow-none">
							<div className="absolute top-0 left-0 w-full h-full bg-[#EDA909] opacity-5 pointer-events-none"></div>
							<div className="text-[#EDA909] mb-2 font-medium flex items-center justify-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect
										x="2"
										y="7"
										width="20"
										height="14"
										rx="2"
										ry="2"
									></rect>
									<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
								</svg>
								Your Balance
							</div>
							<div className="text-4xl font-bold text-[#EDA909] mb-1">
								12,500.00
							</div>
							<div className="text-gray-600 dark:text-[#818181] text-sm">
								P-NECTR
							</div>
						</div>

						{/* Status & Contributions */}
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-5 shadow-sm dark:shadow-none">
								<div className="text-gray-600 dark:text-[#818181] text-xs mb-3 flex items-center gap-2">
									<span className="text-[#00C950]">●</span>{" "}
									Presale Status
								</div>
								<div className="text-[#00C950] border border-[#00C950] inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-3">
									OPEN
								</div>
								<div className="text-xs text-gray-600 dark:text-[#818181]">
									ends in :{" "}
									<span className="text-[#EDA909] block mt-1 font-medium">
										14d 6h 32m
									</span>
								</div>
							</div>
							<div className="bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-5 shadow-sm dark:shadow-none">
								<div className="text-gray-600 dark:text-[#818181] text-xs mb-3 flex items-center gap-2">
									<span className="text-[#2B7FFF]">●</span>{" "}
									Contributions
								</div>
								<div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
									3
								</div>
								<div className="text-xs text-gray-600 dark:text-[#818181]">
									transactions
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Transaction History */}
				<div className="mt-6 bg-white dark:bg-[#0A0E12] border border-gray-200 dark:border-[#1F1F1F] rounded-[20px] p-6 shadow-sm dark:shadow-none">
					<h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
						Transaction History
					</h3>

					<div className="flex gap-1 mb-6 bg-gray-100 dark:bg-[#13161A] p-1 rounded-lg w-fit">
						<button className="px-6 py-2 bg-[#EDA909] text-black rounded-md text-sm font-bold">
							All
						</button>
						<button className="px-6 py-2 text-gray-600 dark:text-[#818181] hover:text-gray-900 dark:hover:text-white rounded-md text-sm font-medium transition-colors">
							Pending
						</button>
						<button className="px-6 py-2 text-gray-600 dark:text-[#818181] hover:text-gray-900 dark:hover:text-white rounded-md text-sm font-medium transition-colors">
							Success
						</button>
						<button className="px-6 py-2 text-gray-600 dark:text-[#818181] hover:text-gray-900 dark:hover:text-white rounded-md text-sm font-medium transition-colors">
							Failed
						</button>
					</div>

					<div className="space-y-3">
						{[
							{
								amount: "+5,000 P-NECTR",
								hash: "0x1a2b3cXvxF23Ea4567543",
								status: "success",
								time: "1h ago",
							},
							{
								amount: "+7,500 P-NECTR",
								hash: "0x1a2b3cXvxF23Ea4567543",
								status: "Failed",
								time: "1h ago",
							},
							{
								amount: "+7,500 P-NECTR",
								hash: "0x1a2b3cXvxF23Ea4567543",
								status: "Pending",
								time: "1h ago",
							},
						].map((tx, i) => (
							<div
								key={i}
								className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-50 dark:bg-[#13161A] rounded-[15px] border border-gray-200 dark:border-[#1F1F1F] gap-4"
							>
								<div className="flex items-center gap-4">
									<div
										className={`w-10 h-10 rounded-full flex items-center justify-center border ${
											tx.status === "success"
												? "text-[#00C950] bg-[#00C9501A] border-[#00C95033]"
												: tx.status === "Failed"
													? "text-[#FF3B30] bg-[#FF3B301A] border-[#FF3B3033]"
													: "text-[#EDA909] bg-[#EDA9091A] border-[#EDA90933]"
										}`}
									>
										{tx.status === "success" ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
										) : tx.status === "Failed" ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<line
													x1="18"
													y1="6"
													x2="6"
													y2="18"
												></line>
												<line
													x1="6"
													y1="6"
													x2="18"
													y2="18"
												></line>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="3"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
											</svg>
										)}
									</div>
									<div>
										<div className="font-bold text-gray-900 dark:text-white">
											{tx.amount}
										</div>
										<div className="text-xs text-gray-600 dark:text-[#818181] flex items-center gap-2 mt-0.5">
											{tx.hash}
											<button className="hover:text-gray-900 dark:hover:text-white transition-colors">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="12"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<rect
														x="9"
														y="9"
														width="13"
														height="13"
														rx="2"
														ry="2"
													></rect>
													<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
												</svg>
											</button>
										</div>
										<div className="text-xs text-[#EDA909] mt-1 cursor-pointer hover:underline flex items-center gap-1">
											View on Explorer
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="10"
												height="10"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
												<polyline points="15 3 21 3 21 9"></polyline>
												<line
													x1="10"
													y1="14"
													x2="21"
													y2="3"
												></line>
											</svg>
										</div>
									</div>
								</div>
								<div className="text-right flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-0 w-full md:w-auto justify-between md:justify-start">
									<div
										className={`text-[10px] px-2 py-0.5 rounded border mb-1 uppercase font-bold ${
											tx.status === "success"
												? "text-[#00C950] border-[#00C950] bg-[#00C9501A]"
												: tx.status === "Failed"
													? "text-[#FF3B30] border-[#FF3B30] bg-[#FF3B301A]"
													: "text-[#EDA909] border-[#EDA909] bg-[#EDA9091A]"
										}`}
									>
										{tx.status}
									</div>
									<div className="text-xs text-gray-500 dark:text-[#818181]">
										{tx.time}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
