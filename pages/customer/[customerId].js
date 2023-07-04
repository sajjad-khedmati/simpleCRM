import { useState } from "react";
import { useRouter } from "next/router";
import AddProduct from "@/components/templates/AddProduct";
import connectToDB from "@/databaseConnection";
import { Customer } from "@/models/Customer";
import EditModal from "@/components/modules/EditModal";

export default function CustomerId({ data }) {
	const router = useRouter();
	const [products, setProducts] = useState([]);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	if (router.isFallback) {
		return (
			<section className="container">
				<p>loading...</p>
			</section>
		);
	}

	const addProduct = () => {
		if (products.length === 0) {
			setProducts([
				{
					id: 0,
					productName: "",
					productPrice: "",
					productQuantity: "",
				},
			]);
			return;
		}
		setProducts((prev) => [
			...prev,
			{
				id: prev[products.length - 1]?.id + 1,
				productName: "",
				productPrice: "",
				productQuantity: "",
			},
		]);
	};

	return (
		<section className="container flex flex-col lg:flex-row items-center xl:gap-32 lg:gap-20 gap-10 h-full overflow-hidden">
			<div className="flex flex-col gap-2 mt-4 md:w-96 w-full self-center">
				<h2 className="lg:text-4xl text-lg font-semibold capitalize">
					{data.first_name} {data.last_name}
				</h2>
				<p className="lg:text-xl text-xs font-light text-slate-500">
					@{data.username}
				</p>
				<div className="border mt-4 rounded-xl border-sky-200 relative p-4 text-sm select-none">
					<span className="text-xs lg:text-base absolute -top-3 left-0 bg-white px-4 text-sky-500">
						Connection
					</span>
					<div className="text-xs">
						{data?.email && (
							<p className="lg:px-4 py-1 lg:py-2">{data.email}</p>
						)}
						<p className="lg:px-4 py-1 lg:py-2">{data.phone}</p>
						<p className="lg:px-4 py-1 lg:py-2 ">{data.postal_code}</p>
						<p className="lg:px-4 py-1 lg:py-2">{data.address}</p>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<button
						onClick={addProduct}
						className="p-2 bg-sky-300 text-sky-700 rounded-lg border-2 border-sky-300 hover:bg-sky-500
						 hover:text-slate-100 hover:border-sky-500 transition-all duration-300"
					>
						Add Product
					</button>
					<button
						onClick={() => setIsEditModalOpen(true)}
						className="p-2 text-sm border-2 border-green-200 text-green-500 hover:bg-green-200 hover:text-green-700
					 rounded-lg transition-all duration-300"
					>
						Edit Customer
					</button>
					<button
						className="p-2 text-sm bg-transparent border-2 border-red-200 hover:bg-red-200 hover:texxt-red-700
					 text-red-500 rounded-lg transition-all duration-300"
					>
						Delete Customer
					</button>
				</div>
			</div>

			<EditModal customer={data} />

			<div className="flex-1 lg:h-[600px] lg:overflow-y-scroll w-full">
				<AddProduct
					customerId={data._id}
					products={products}
					setProducts={setProducts}
				/>
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
