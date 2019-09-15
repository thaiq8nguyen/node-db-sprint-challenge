const express = require("express");
const morgan = require("morgan");

const projectRouter = require("./resources/projects/project.controller");

const server = express();
server.use(express.json());
server.use(morgan("dev"));

//server.use("/api/projects", projectRouter);

const serverRoutes = require("./routes")(server);

module.exports = server;
