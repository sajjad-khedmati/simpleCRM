import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
	return (
		<section className="container w-full flex flex-col lg:flex-row justify-between items-center gap-12 xl:gap-20">
			{/* right side */}
			<div className="w-full h-max lg:order-2">
				<Image
					className="w-full h-auto"
					src="/assets/landingImage.jpg"
					alt="landing image"
					width={1000}
					height={900}
				/>
			</div>
			{/* left side */}
			<div className="flex flex-col gap-6">
				<div>
					<h1 className="font-extrabold text-5xl lg:text-6xl xl:text-8xl text-center lg:text-start">
						Make Your <br />
						<strong className="bg-clip-text text-transparent bg-gradient-to-r from-sky-700 via-sky-500 to-sky-200">
							Business
						</strong>{" "}
						Grow
					</h1>

					<p className="text-sm text-justify my-2 text-slate-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
						eius fugit officiis quis facere dignissimos eveniet nobis cum
						aliquid eligendi!
					</p>
				</div>

				<Link
					className="px-4 py-2 rounded-xl border-2 border-sky-500 bg-sky-500 text-white text-center text-xl font-semibold
                    hover:bg-transparent hover:border-sky-700 hover:text-sky-700 transition-all duration-300 shadow-2xl
                    shadow-sky-500/40 hover:shadow-sky-700/30"
					href="main"
				>
					Start Managing
				</Link>
			</div>
		</section>
	);
}
