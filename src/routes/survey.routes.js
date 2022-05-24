const express = require('express');
const surveyController = require('../controller/QuestionController');

const router = express.Router();

router.get('/enquetes', surveyController.read);
router.get('/enquetes2', surveyController.read2);

module.exports = router;
