import CustomerList from "@/components/templates/CustomerList";
import Link from "next/link";

export default function Index({ data }) {
	return (
		<section className="container">
			<Link href="/customer" className="">
				Add New Customer
			</Link>

			<CustomerList data={data} />
		</section>
	);
}

export const getServerSideProps = async () => {
	const data = await fetch("http://localhost:3000/api/customer");
	const result = await data.json();
	return {
		props: result,
	};
};
