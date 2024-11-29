const router = require("express").Router();
const TopicsСontroller = require('../Controllers/Topics.controller');

router.get('/', TopicsСontroller.getAllTopics)

module.exports = router;
