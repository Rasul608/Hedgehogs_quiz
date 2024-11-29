const {Question} = require('../db/models')

class QuestionService {
static async getById(id){
  const questionArr = Question.findAll({where:{topic_id:id}})
  return questionArr
}
}
module.exports = QuestionService