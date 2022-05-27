const express = require('express');
const surveyController = require('../controller/QuestionController');

const router = express.Router();

router.get('/questions/criar', surveyController.createPage);
router.get('/questions', surveyController.read);
router.get('/questions/:id', surveyController.questionPage);
router.get('/questions/edit/:id', surveyController.updatePage);
router.put('/questions/edit/:id', surveyController.update);
router.post('/questions', surveyController.save);
router.get('/questions/delete/:id', surveyController.delete);

module.exports = router;
