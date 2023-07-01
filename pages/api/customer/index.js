import connectToDB from "@/databaseConnection";
import { Customer } from "@/models/Customer";

export default async function handler(req, res) {
	if (req.method === "GET") {
		try {
			await connectToDB();

			const result = await Customer.find();

			res.status(201).json({
				data: result,
			});
		} catch (error) {
			res.status(500).json({
				message: "internal server error!",
				error: error.message,
			});
		}
	} else if (req.method === "POST") {
		try {
			await connectToDB();
			const data = req.body;

			try {
				const result = await Customer.create(data);
				return res.status(201).json({
					message: "customer successfuly Created!",
					data: result,
				});
			} catch (error) {
				res.status(401).json({
					message: "bad request",
					error: error.message,
				});
			}
		} catch (error) {
			res.status(500).json({
				message: "internal server error",
				error: error.message,
			});
		}
	}
}
