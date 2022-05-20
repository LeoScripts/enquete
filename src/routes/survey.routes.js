const express = require('express');
const surveyController = require('../controller/SurveyController');

const router = express.Router();

router.get('/enquetes', surveyController.read);

module.exports = router;