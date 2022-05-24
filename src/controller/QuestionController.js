const prisma = require('../database/client');

const questionController = {
  async read(req, res) {
    const questions = await prisma.question.findMany({
      include: {
        AnswerQuestion: true,
      },
    });
    return res.render(
      'questions',
      {
        questions,
      },
    );
  },
  async read2(req, res) {
    const questions = await prisma.question.findMany({
      include: {
        AnswerQuestion: true,
      },
    });
    res.send(questions);
  },
};

module.exports = questionController;
