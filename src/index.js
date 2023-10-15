const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());

const port = 3000;

app.use(routes);

app.listen(port);
