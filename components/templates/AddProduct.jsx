export default function AddProduct({ customerId, products , setProducts}) {
	return (
		<div className="my-8 grid grid-cols-2 gap-4 overflow-y-scroll">
			{products.map((item, index) => {
				return (
					<div
						className="border px-8 py-4 rounded-xl flex flex-col gap-2"
						key={item.productName}
					>
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-lg font-light text-sky-500">new Product</h2>
							<button
								onClick={() => {
									
								}}
								className="text-[10px] w-max ml-auto bg-red-100 text-red-400 px-2 py-1 rounded-full"
							>
								cancel
							</button>
						</div>

						{[
							{ id: "name", label: "Product Name" },
							{ id: "quantity", label: "Product quantity" },
							{ id: "price", label: "Product Price" },
						].map((item) => (
							<div key={item.id} className="flex flex-col gap-1 relative my-2">
								<p className="text-xs absolute -top-2 px-4 bg-white">
									{item.label}
								</p>
								<input
									type="text"
									id={item.id}
									className="px-2 py-3 border rounded-xl"
								/>
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
}
