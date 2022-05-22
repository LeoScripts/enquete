const express = require('express');
const surveyController = require('../controller/QuestionController');

const router = express.Router();

router.get('/enquetes', surveyController.read2);

module.exports = router;
