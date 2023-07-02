import connectToDB from "@/databaseConnection";
import { Customer } from "@/models/Customer";
import { useRouter } from "next/router";

export default function CustomerId({ data }) {
	const router = useRouter();

	if (router.isFallback) {
		return (
			<section className="container">
				<p>loading...</p>
			</section>
		);
	}
	return (
		<section className="container">
			<div className="flex flex-col items-center gap-2 mt-4">
				<h2 className="text-5xl font-semibold capitalize">
					{data.first_name} {data.last_name}
				</h2>
				<p className="text-2xl font-light text-slate-500">@{data.username}</p>
			</div>
		</section>
	);
}

export async function getStaticPaths() {
	await connectToDB();

	const customers = await Customer.find();

	const paths = customers.slice(0, 4).map((item) => ({
		params: {
			customerId: item._id.toString(),
		},
	}));

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	await connectToDB();
	const res = await Customer.findById(params.customerId);

	if (!res) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data: JSON.parse(JSON.stringify(res)) },
	};
}
