class TopicApi {
  static async getTopics() {
    const response = await fetch("/api/topics");
    return await response.json();
  }

  // static async getTopicById(id) {
  //   const response = await fetch(`/api/topics/${id}`);
  //   return await response.json();
  // }
}

export default TopicApi;
