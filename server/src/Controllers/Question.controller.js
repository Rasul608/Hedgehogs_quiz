const QuestionService = require("../Service/Question.service");
const formatResponse = require("../utils/formatResponse");

class QuestionController{
  static async getQuestionByTopicId(req,res){
    const{id} = req.params
    try {
      const question = await QuestionService.getById(id)
      res.status(200).json(formatResponse(200,'success',question,null))
    res.status(200)
    } catch ({message}) {
      console.log(message);
      res.status(500).json(formatResponse(500,'Server error',null,message))
      
    }
  }
}
module.exports = QuestionController
