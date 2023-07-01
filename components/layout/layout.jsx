import Navbar from "../modules/Navbar";

export default function Layout({ children }) {
	return (
		<div className="w-screen h-screen flex flex-col justify-between">
			<header className="container">
				<Navbar />
			</header>
			<main className="flex-1">{children}</main>
			<footer className="text-center text-slate-400 text-[12px] py-1">
				&copy;all right reserved - sajjad khedmati 2023
			</footer>
		</div>
	);
}
