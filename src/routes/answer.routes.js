const express = require('express');
const answerController = require('../controller/AnswerController');

const router = express.Router();

router.get('/answers/criar', answerController.createPage);
router.post('/answers/criar', answerController.save);
router.get('/answers', answerController.read);
router.get('/answers/edit/:id', answerController.updatePage);
router.put('/answers/edit/:id', answerController.update);
router.get('/answers/delete/:id', answerController.delete);

module.exports = router;
