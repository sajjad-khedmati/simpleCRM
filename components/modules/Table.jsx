import Link from "next/link";

export default function Table({ data, headers }) {
	return (
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
								return (
									<td className="py-4 px-3 text-xs" key={element}>
										{item.first_name} {item.last_name}
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
	);
}
