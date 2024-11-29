class QuestionApi{

static async getQuestionById(id){

  const data = await fetch(`/api/questions/${id}`)
  return await data.json()
}

}
export default QuestionApi