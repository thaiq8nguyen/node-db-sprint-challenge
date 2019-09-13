const router = require("express").Router();
const { getProject } = require("./projectModel");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await getProject(id);
    res.json({ project });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Unable to retrieve project." });
  }
});
module.exports = router;
