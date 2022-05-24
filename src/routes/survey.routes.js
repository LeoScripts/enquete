const express = require('express');
const surveyController = require('../controller/QuestionController');

const router = express.Router();

router.get('/enquetes', surveyController.read);
router.get('/enquetes/criar', surveyController.create);
router.post('/enquetes', surveyController.save);
router.get('/enquetes2', surveyController.read2);

module.exports = router;
