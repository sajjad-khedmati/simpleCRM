import connectToDB from "@/databaseConnection";
import { Customer } from "@/models/Customer";

export default async function handler(req, res) {
	const { customerId } = req.query;
	console.log(customerId);
	try {
		await connectToDB();
		try {
			if (req.method === "GET") {
				const customer = await Customer.findById(customerId);
				if (customer) {
					return res.status(200).json({
						data: customer,
					});
				}

				res.status(404).json({
					message: "customer not found",
				});
			} else if (req.method === "DELETE") {
				const result = await Customer.findOneAndDelete({ _id: customerId });
				if (result) {
					res.status(202).json({
						message: "customer successfully deleted",
						data: result,
					});
				} else {
					res.status(404).json({
						message: "customer not found",
					});
				}
			} else if (req.method === "PUT") {
				const result = await Customer.updateOne({ _id: customerId }, req.body);
				if (result.matchedCount > 0) {
					res.status(201).json({
						message: "customer successfully updated",
						data: result,
					});
				} else {
					res.status(404).json({
						message: "customer not found",
					});
				}
			}
		} catch (error) {
			throw error.message;
		}
	} catch (error) {
		res.status(500).json({
			message: "internal server error",
			error: error || error.message,
		});
	}
}
