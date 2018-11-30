const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	console.log(req);
	res.end('end session');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
