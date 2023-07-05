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
						<Link href="/main">Main</Link>
						<Link href="/about">about us</Link>
						<Link href="/faq">FAQ</Link>
					</div>
				)}
				{route !== "/customer" && (
					<Link
						href="/customer"
						className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm
                 hover:bg-sky-600 transition-all duration-300"
					>
						Add New Customer
					</Link>
				)}
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
