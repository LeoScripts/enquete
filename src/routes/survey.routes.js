const express = require('express');
const surveyController = require('../controller/QuestionController');

const router = express.Router();

router.get('/enquetes/criar', surveyController.create);
router.get('/enquetes', surveyController.read);
router.get('/enquetes/:id', surveyController.questionPage);
router.get('/enquetes/edit/:id', surveyController.updatePage);
router.put('/enquetes/edit/:id', surveyController.update);
router.post('/enquetes', surveyController.save);
router.get('/enquetes/delete/:id', surveyController.questionPage);

module.exports = router;
