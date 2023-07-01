import Table from "../modules/Table";

export default function CustomerList({ data }) {
	return (
		<div className="flex flex-col">
			<Table
				data={data}
				headers={["username", "first_name", "last_name", "email", "phone"]}
			/>
		</div>
	);
}
