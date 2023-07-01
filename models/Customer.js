import { models, model, Schema } from "mongoose";

const CustomerSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		first_name: {
			type: String,
		},
		last_name: {
			type: String,
		},
		email: {
			type: String,
		},
		phone: {
			type: Number,
			required: true,
		},
		postal_code: {
			type: Number,
			required: true,
		},
		address: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

export const Customer = models.Customer || model("Customer", CustomerSchema);
