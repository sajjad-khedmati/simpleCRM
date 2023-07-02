import { Schema, models, model } from "mongoose";

const ProductSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	quantity: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
});

export const Product = models.Product || model("Product", ProductSchema);
