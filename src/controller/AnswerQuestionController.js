const prisma = require('../database/client');

const answerQuestionController = {
  async read(req, res) {
    const data = await prisma.answerQuestion.findMany({
      include: {
        question: true,
        answer: true,
      },
    });

    return res.render('answerQuestion', { data });
  },

  async save(req, res) {
    const { answerId, questionId } = req.body;
    await prisma.answerQuestion.create({
      data: {
        answerId,
        questionId,
      },
    });
    res.redirect('/questions');
  },

};

module.exports = answerQuestionController;
