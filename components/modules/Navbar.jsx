import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
	const { route } = useRouter();
	return (
		<nav className="w-full py-4 flex items-center justify-between">
			<Link href="/">
				<h1 className="text-3xl select-none">
					CR
					<span className="font-bold text-xl text-sky-500 italic">Manage</span>
				</h1>
			</Link>
			<div className="flex items-center gap-8">
				{route !== "/" && (
					<div className="flex items-center gap-8 text-sm">
						<Link href="/">Home</Link>
						<Link href="/about">about us</Link>
						<Link href="/faq">FAQ</Link>
					</div>
				)}
				<button
					disabled
					className="px-2 py-1 rounded-lg border-2 border-sky-500 text-sky-500 text-sm hover:bg-sky-500
                 hover:text-white transition-all duration-300"
				>
					Authentication
				</button>
				{route === "/" && (
					<Link
						href="/main"
						className="px-2 py-1 rounded-lg border-2 border-sky-500 bg-sky-500 text-sm text-white hover:bg-transparent
                hover:text-sky-500 transition-all duration-300"
					>
						Start Managing
					</Link>
				)}
			</div>
		</nav>
	);
}
