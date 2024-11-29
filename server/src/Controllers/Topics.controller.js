const TopicsService = require("../Service/Topic.service");
const formatResponse = require("../utils/formatResponse");

class TopicController {
  static async getAllTopics(req, res) {
    try {
      const topics = await TopicsService.getAll();
      if (topics.length === 0) {
        return res
          .status(204)
          .json(formatResponse(204, "Not found topics", []));
      }
      res.status(200).json(formatResponse(200, "Success", topics));
    } catch ({ message }) {
      console.log(message);
      res.status(500).json(500, "Internal server error", null, message);
    }
  }
}
module.exports = TopicController;
