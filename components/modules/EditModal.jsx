import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { MdOutlineClose } from "react-icons/md";

export default function EditModal({ customer, setIsOpen }) {
	const router = useRouter();
	const [customerData, setCustomerData] = useState(
		(({
			first_name,
			last_name,
			username,
			phone,
			email,
			postal_code,
			address,
		}) => ({
			username,
			first_name,
			last_name,
			phone,
			email,
			postal_code,
			address,
		}))(customer),
	);

	const handleChange = (e) => {
		const editedItem = {};
		editedItem[e.target.name] = e.target.value;
		setCustomerData({ ...customerData, ...editedItem });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await axios.put(
				`/api/customer/${customer._id}`,
				customerData,
			);

			if (result.status === 201) {
				setIsOpen(false);
				toast.success(result.data.message);
				router.reload();
			} else {
				toast.error(result.data.message);
			}
		} catch (error) {
			setIsOpen(false);
			toast.error(error.message);
		}
	};

	return (
		<div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 flex items-center justify-center">
			<div className="bg-slate-50 flex flex-col rounded-xl p-4 w-96  max-h-[90%] overflow-y-scroll">
				<MdOutlineClose
					onClick={() => setIsOpen(false)}
					className="ml-auto text-2xl cursor-pointer"
				/>
				<form onSubmit={(e) => handleSubmit(e)}>
					{customerData &&
						Object.entries(customerData).map((item) => {
							if (item[0] === "address") {
								return (
									<div key={item[0]} className="flex flex-col gap-1 my-2 group">
										<label
											className="text-xs text-slate-600 group-focus-within:text-sky-500
                                        transition-all duration-300"
											htmlFor={item[0]}
										>
											{item[0]}
										</label>
										<textarea
											name={item[0]}
											id={item[0]}
											rows="3"
											className="w-full border-2 border-dashed rounded-xl outline-none px-4 py-2
                                            focus-within:border-sky-300 transtion-all duration-300 text-sm text-zinc-400
                                            focus-within:text-zinc-900"
											value={item[1]}
											onChange={(e) => handleChange(e)}
										></textarea>
									</div>
								);
							}

							return (
								<div key={item[0]} className="flex flex-col gap-1 my-2 group">
									<label
										className="text-xs text-slate-600 group-focus-within:text-sky-500 transition-all 
                                        duration-300"
										htmlFor={item[0]}
									>
										{item[0]}
									</label>
									<input
										className="px-4 py-2 border rounded-xl text-zinc-400 focus-within:text-zinc-900
                                        outline-none focus-within:border-sky-300 transition-all duration-300 text-sm"
										name={item[0]}
										id={item[0]}
										type="text"
										value={item[1]}
										onChange={(e) => handleChange(e)}
									/>
								</div>
							);
						})}

					<button
						type="submit"
						className="py-2 text-center px-6 bg-green-300 w-full rounded-xl uppercase text-lg
                    hover:bg-green-500 hover:text-white transition-all duration-300"
					>
						Edit
					</button>
				</form>
			</div>
		</div>
	);
}
