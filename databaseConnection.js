const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
	if (mongoose.connections[0].readyState) return;
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("SUCCESSFULY CONNECTED TO DB");
	} catch (error) {
		throw error;
	}
};

export default connectToDB;
