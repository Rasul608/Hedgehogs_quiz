const AnswerService = require('../Service/Answer.service');



class AnswerController {
    static async createAnswer(req, res) {
      const { id } = req.params;   
      const { userAnswer } = req.body; 
      try {
        const question = await Question.findByPk(id);   // вопрос по id
        if (!question) {
          return res.status(404).json({ message: 'Question not found' });
        }
        const isCorrect = userAnswer === question.correctAnswer;  //пров прав отв
        const newAnswer = await Answer.create({  // Созд отв в таб Answer
          question_id: id,
          isCorrect,
        });
        const message = isCorrect ? 'Correct' : 'Incorrect';  // Формат рез и отпр смс
        res.status(200).json({
          status: 200,
          message,
          data: newAnswer,
        });
        if (isCorrect) {   // Если отв прав, обн стат
          await Stat.create({
            question_id: id,
            result: 'Correct',
          });
        }
        await Answer.destroy({ where: { question_id: id, id: { [Op.ne]: newAnswer.id } } });  // Удл пред отв, если они есть
      } catch (error) {
        console.error('Error in createAnswer:', error);  // Обр ошибки
        res.status(500).json({ message: 'Internal Server Error', error });
      }
    }
  


    static async deleteAnswer(req, res) {
      const { id } = req.params;    // Получ id отв для удл
      try {
        const answer = await Answer.findByPk(id);  // Нах отв по id
        if (!answer) {
          return res.status(404).json({ message: 'Answer not found' });
        }
        await answer.destroy();  // Удл ответ
        res.status(200).json({
          status: 200,
          message: 'Answer deleted successfully',
        });
      } catch (error) {
        console.error('Error in deleteAnswer:', error);   // Обр ошибки
        res.status(500).json({ message: 'Internal Server Error', error });
      }
    }
  }
  

module.exports = AnswerController;