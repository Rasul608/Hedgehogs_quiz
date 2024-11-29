const QuestionController = require('../Controllers/Question.controller')
const router = require('express').Router()

router.get('/:id',QuestionController.getQuestionByTopicId)

module.exports = router