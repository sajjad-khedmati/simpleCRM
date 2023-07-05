import connectToDB from "@/databaseConnection";
import { Customer } from "@/models/Customer";
import Link from "next/link";

export default function Index({ data }) {
	const headers = ["username", "full_name", "email", "phone"];
	return (
		<section className="container">
			<div className="flex flex-col gap-8 mt-8">
				<h2 className="text-center lg:text-6xl md:text-4xl text-3xl font-bold">
					Customer List
				</h2>

				<div className="overflow-x-scroll">
					<table
						className="overflow-hidden w-full border-2 border-collapse border-gray-200
        table-auto rounded-t-md"
					>
						<thead className="bg-slate-200">
							<tr className="py-2">
								{headers.map((item) => (
									<td className="py-2 px-3 text-sm text-slate-600" key={item}>
										{item.replace("_", " ")}
									</td>
								))}

								<td className="py-2 px-3 text-sm text-slate-600 text-center">
									action
								</td>
							</tr>
						</thead>

						<tbody>
							{data.map((item) => (
								<tr key={item._id} className="border-b-2">
									{headers.map((element) => {
										if (element === "full_name") {
											if (item.first_name) {
												return (
													<td className="py-4 px-3 text-xs" key={element}>
														{item.first_name} {item.last_name}
													</td>
												);
											}
											return (
												<td className="py-4 px-3 text-xs" key={item._id}>
													-
												</td>
											);
										}
										const checkItem = Object.entries(item).find(
											(flag) => flag[0] === element,
										);
										if (checkItem) {
											return (
												<td className="py-4 px-3 text-xs" key={checkItem[0]}>
													{checkItem[0] === "createdAt"
														? new Date(checkItem[1]).toLocaleString()
														: checkItem[1]}
												</td>
											);
										}

										return (
											<td className="py-4 px-3 text-xs" key={item}>
												-
											</td>
										);
									})}

									<td className="text-center">
										<Link
											className="text-xs px-3 py-1 rounded-xl bg-sky-200 text-sky-600 hover:bg-transparent
                                border-2 border-sky-200 hover:text-sky-400 transition-all duration-300"
											href={`/customer/${item._id}`}
										>
											details
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

export async function getServerSideProps() {
	try {
		await connectToDB();
		const result = await Customer.find();

		return {
			props: {
				data: JSON.parse(JSON.stringify(result)),
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
}
