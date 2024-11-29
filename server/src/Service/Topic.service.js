const { Topic } = require("../db/models");
class TopicsService {
  static async getAll() {
    const topicsFromDB = await Topic.findAll();
    return topicsFromDB;
  }
}
module.exports = TopicsService;
