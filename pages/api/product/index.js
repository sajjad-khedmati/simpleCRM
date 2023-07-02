import connectToDB from "@/databaseConnection";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
	try {
		await connectToDB();
		try {
			if (req.method === "GET") {
				const products = await Product.find();
				res.status(201).json({
					data: products,
				});
			} else if (req.method === "POST") {
				const postedData = req.body;
				const result = await Product.create(postedData);
                
				res.status(201).json({
					message: "product successfully created",
					data: result,
				});
			}
		} catch (error) {
			res.status(500).json({
				message: "internal server error",
				error: error || error.message,
			});
		}
	} catch (error) {
		res.status(500).json({
			message: "internal server error",
			error: error || error.message,
		});
	}
}
