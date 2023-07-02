import Table from "../modules/Table";

export default function CustomerList({ data }) {
	return (
		<div className="flex flex-col">
			<div className="overflow-x-scroll">
				<Table
					data={data}
					headers={["username", "full_name", "email", "phone", "createdAt"]}
				/>
			</div>
		</div>
	);
}
