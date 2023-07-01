import Link from "next/link";

export default function Table({ data, headers }) {
	return (
		<table
			className="overflow-hidden border-2 border-collapse border-gray-200
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
							const checkItem = Object.entries(item).find(
								(flag) => flag[0] === element,
							);
							if (checkItem) {
								return (
									<td className="py-4 px-3 text-xs" key={checkItem[0]}>
										{checkItem[1]}
									</td>
								);
							}
						})}

						<td className="text-center">
							<Link
								className="text-xs px-3 py-1 rounded-xl bg-sky-200 text-sky-600"
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
