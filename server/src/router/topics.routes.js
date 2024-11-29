const router = require("express").Router();
const TopicsСontroller = require('../controllers/Topics.controller');

router.get('/', TopicsСontroller.getAllTopics)

module.exports = router;
