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
  create(req, res) {
    res.render('createQuestion');
  },
  async save(req, res) {
    const { question, start, end } = req.body;
    console.log(start, end, question);
    const createQuestion = await prisma.question.create({
      data: {
        question,
        start,
        end,
      },
    });
    console.log(createQuestion);
    res.redirect('/enquetes');
  },
};

module.exports = questionController;
