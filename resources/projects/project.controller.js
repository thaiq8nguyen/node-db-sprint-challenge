const Project = require("./project.model");
let controller = {
  getProjectById: async (req, res) => {
    const { id } = req.params;

    try {
      const project = await Project.query().findById(id);
      res.json({ project });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Unable to retrieve project." });
    }
  }
};

module.exports = controller;
