const prisma = require('../database/client');

const answerQuestionController = {
  async read(req, res) {
    const answers = await prisma.answer.findMany();
    const data = await prisma.question.findMany({
      include: {
        AnswerQuestion: true,
      },
    });
    return res.render('answerQuestion', { data, answers });
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
