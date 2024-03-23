import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";


export default function Home() {
	return (
		<main className="flex w-full min-h-screen">
			<div className="hidden w-1/2 lg:flex flex-col justify-center items-center bg-[#292929] py-8 px-4">
				<div className="px-4">
					<img
						src="/login-img.svg"
						alt=""
						height="200px"
					/>
				</div>
				<div className="my-3 text-center">
					<div className="text-[#FBFBFB] text-2xl">
						Manage Multiple Currencies
					</div>
					<div className="text-[#BDBDBD]  text-base">
						Store, send, and receive funds in multiple currencies
						<br />
						hassle-free. From USD to EUR, manage it all in one place.
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className="flex justify-between w-[140px] items-center mt-5">
						<MdOutlineNavigateBefore
							className="tex-lg"
							style={{
								color: "#ffffff",
							}}
						/>
						<div className="flex justify-between  items-center w-[50px]">
							<div className="h-2 w-2 rounded-full bg-[#FFFFFF]"></div>
							<div className="h-2 w-2 rounded-full bg-[#7C7C7C]"></div>
							<div className="h-2 w-2 rounded-full bg-[#7C7C7C]"></div>
						</div>
						<MdOutlineNavigateNext
							style={{
								color: "#ffffff",
							}}
						/>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/2  flex flex-col pb-4 justify-between  bg-[#FBFBFB]">
				<div className="flex flex-col items-center">
					<div className="mt-16 ">
						<div>
							<img
								src="/fxkara-logo.svg"
								height="200px"
								alt=""
							/>
						</div>
						<div className="h-[500px] w-full flex flex-col justify-center">
							<h2 className="text-4xl font-bold">Log in</h2>
							<div className="mt-3 text-lg text-[#7C7C7C]">
								Welcome back! Please enter your details
							</div>
							<div className="mt-6">
								<div className="mt-2">
									<div className="font-semibold text-base">Email</div>
									<input
										placeholder="Enter your email"
										type="email"
										className="w-full h-10 px-3 placeholder:text-[#989898] rounded-md border border-[#DCDCDC]"
									/>
								</div>
								<div className="mt-5">
									<div className="font-semibold text-base">Password</div>
									<input
										type="password"
										placeholder="Enter your password"
										className="w-full h-10 px-3 placeholder:text-[#989898] rounded-md border border-[#DCDCDC]"
									/>
								</div>
								<div className="mt-3 flex justify-between items-center">
									<div className="  items-center  ">
										<div className="flex items-center">
											<div>
												<input
													type="checkbox"
													name=""
													className="rounded-lg
                      border-[#DCDCDC]
                      "
													id=""
												/>{" "}
											</div>
											<div className="text-[#656565] text-xs ms-1">
												Remember for 30 days
											</div>
										</div>
									</div>
									<div className="text-[#FF2452] font-semibold  text-xs">
										Forgot password?
									</div>
								</div>
								<div className="bg-[#1E1E1E] text-[#FFFFFF] rounded-lg h-12 mt-6 flex justify-center items-center">
									Login
								</div>
								<div className="text-[#7C7C7C] text-sm mt-8 text-center">
									Don't have an account?{" "}
									<span className="text-[#7F56D9] font-semibold"> Sign up</span>
								</div>
							</div>
						</div>
					</div>
				</div>

                <div className="flex justify-between items-center px-16 h-12">
					<div>© FXkarasell 2024</div>
					<div className="flex items-center">
						{" "}
						<div className="h-1 w-1 m-2  rounded-full bg-[#7C7C7C]"></div>
						<div>Help center</div>
					</div>
					<div className="flex items-center">
						{" "}
						<div className="h-1 w-1 m-2   rounded-full bg-[#7C7C7C]"></div>
						<div>Terms of Service</div>
					</div>
				</div>
			</div>
		</main>
	);
}
