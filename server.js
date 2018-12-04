/* Modules */
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

/* Locals */
require("./models/User");
require("./services/passport");

const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

/* Application */
const app = express();
const port = process.env.PORT || 5000;

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
authRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
