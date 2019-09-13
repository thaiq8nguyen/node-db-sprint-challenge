const express = require("express");
const morgan = require("morgan");

const projectRouter = require("./resources/projects/projectRouter");

const server = express();
server.use(express.json());
server.use(morgan("dev"));

server.use("/api/projects", projectRouter);

module.exports = server;
