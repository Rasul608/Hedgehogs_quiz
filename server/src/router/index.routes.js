const router = require("express").Router();
const topicsRoutes = require("./topics.routes");
const formatResponse = require("../utils/formatResponse");

router.use("/topics", topicsRoutes);

router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
