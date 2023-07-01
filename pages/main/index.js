import Link from "next/link";

export default function Index() {
	return (
		<section className="container">
			<Link href="/customer" className="">
				Add New Customer
			</Link>
		</section>
	);
}
