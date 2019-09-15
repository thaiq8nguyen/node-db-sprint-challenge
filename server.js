const express = require("express");
const morgan = require("morgan");

const server = express();
server.use(express.json());
server.use(morgan("dev"));

const serverRoutes = require("./routes")(server);

module.exports = server;
