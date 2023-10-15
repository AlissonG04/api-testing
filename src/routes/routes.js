const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ msg: "Server on!" });
});

module.exports = routes;
