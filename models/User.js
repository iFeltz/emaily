/* Modules */
const mongoose = require("mongoose");

/* Locals */
// ...

/* Model */
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: {
		type: Number,
		default: 0
	}
});

mongoose.model("users", userSchema);
