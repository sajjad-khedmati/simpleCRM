import EditModal from "../modules/EditModal";

export default function AddProduct({ customerId, products, setProducts }) {
	const handleChange = (e, index) => {
		products[index][e.target.name] = e.target.value;
	};

	const cancelProduct = (element) => {
		const result = products.filter((item) => item.id !== element.id);
		setProducts(result);
	};

	return (
		<div className="my-8 grid xl:grid-cols-2 grid-cols-1 gap-4 overflow-y-scroll">
			{products.length === 0 && (
				<p className="">
					no product added yet ,<br />{" "}
					<span className="text-xs text-slate-500">
						click on <span className="font-semibold text-slate-600">add product</span> to add new item
					</span>
				</p>
			)}
			{products.map((item, index) => {
				return (
					<div
						className="border lg:px-8 lg:py-4 p-2 rounded-xl flex flex-col gap-2"
						key={item.id}
					>
						<div className="flex items-center justify-between mb-4">
							<h2 className="lg:text-lg text-sm font-light text-sky-500">
								new Product
							</h2>
							<button
								onClick={() => cancelProduct(item)}
								className="text-[10px] w-max ml-auto bg-red-100 text-red-400 px-2 py-1 rounded-full"
							>
								cancel
							</button>
						</div>

						{[
							{ id: "name", label: "productName" },
							{ id: "quantity", label: "productQuantity" },
							{ id: "price", label: "productPrice" },
						].map((item) => (
							<form
								onChange={(e) => handleChange(e, index)}
								key={item.id}
								className="flex flex-col gap-1 relative my-2"
							>
								<p className="text-xs absolute -top-2 px-4 bg-white">
									{item.label}
								</p>
								<input
									name={item.label}
									type="text"
									id={item.id}
									className="px-2 py-3 border rounded-xl"
								/>
							</form>
						))}
					</div>
				);
			})}
		</div>
	);
}
