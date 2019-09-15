const projectController = require("../resources/projects/project.controller");
const routes = server => {
  server.get("/api/projects/:id", projectController.getProjectById);
};

module.exports = routes;
