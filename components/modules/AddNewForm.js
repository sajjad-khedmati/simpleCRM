import { useState } from "react";
import InputField from "../elements/InputField";

export default function AddNewForm() {
	const [customerData, setCustomerData] = useState({
		first_name: "",
		last_name: "",
		user_name: "",
		email: "",
		phone: "",
		address: "",
		postal_code: "",
	});

	const handleChange = (e) => {
		setCustomerData((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	return (
		<form
			className="flex flex-col gap-4 mt-6"
			onSubmit={(e) => e.preventDefault()}
		>
			<p className="text-sky-600 font-semibold">info</p>
			<hr className="border border-sky-600" />
			<div className="flex items-center flex-wrap gap-x-12 gap-y-4">
				<InputField
					type="text"
					label="username"
					name="user_name"
					value={customerData.user_name}
					onChange={handleChange}
				/>
				<InputField
					type="text"
					label="first name"
					name="first_name"
					value={customerData.first_name}
					onChange={handleChange}
				/>
				<InputField
					type="text"
					label="last name"
					name="last_name"
					value={customerData.last_name}
					onChange={handleChange}
				/>
			</div>

			<p className="md:mt-8 text-sky-600 font-semibold">connection</p>
			<hr className="border border-sky-600" />

			<div className="flex items-center flex-wrap gap-x-12 gap-y-4">
				<InputField
					type="text"
					label="email"
					name="email"
					value={customerData.email}
					onChange={handleChange}
				/>
				<InputField
					type="text"
					label="phone"
					name="phone"
					value={customerData.phone}
					onChange={handleChange}
				/>
				<InputField
					type="text"
					label="postal code"
					name="postal_code"
					value={customerData.postal_code}
					onChange={handleChange}
				/>
			</div>

			<div className="flex flex-col gap-4">
				<label htmlFor="address">address</label>
				<textarea
					value={customerData.address}
					onChange={handleChange}
					className="border-dashed  border-2 rounded-lg px-4 py-2 outline-none focus-within:border-sky-300"
					name="address"
					id="address"
					cols="20"
					rows="5"
				></textarea>
			</div>

			<button
				className="bg-sky-600 px-4 py-2 rounded-lg text-white hover:bg-sky-700 transition-all 
            duration-300"
			>
				Create New Customer
			</button>
		</form>
	);
}
