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

  create(req, res) {
    res.render('createQuestion');
  },

  async save(req, res) {
    const { question, start, end } = req.body;
    await prisma.question.create({
      data: {
        question,
        start,
        end,
      },
    });
    res.redirect('/enquetes');
  },

  async questionPage(req, res) {
    const { id } = req.params;
    const question = await prisma.question.findFirst({
      where: {
        id,
      },
    });
    res.render('enquete', { question });
  },

  async update(req, res) {
    const id = req.parans;
    const { question, start, end } = req.body;
    await prisma.question.update({
      where: { id },
      data: {
        question,
        start,
        end,
      },
    });
    res.redirect('/enquetes');
  },
};

module.exports = questionController;
