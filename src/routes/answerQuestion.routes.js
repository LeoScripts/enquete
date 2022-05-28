const express = require('express');
const AnswerQuestionController = require('../controller/AnswerQuestionController');

const router = express.Router();

router.post('/answerQuestions', AnswerQuestionController.save);
router.get('/answerQuestions', AnswerQuestionController.read);

module.exports = router;
