const router = require('express').Router
const questionRoute = require('./question.routes')

// router.use('/topics',)
router.use('/questions',questionRoute)

module.exports = router;

