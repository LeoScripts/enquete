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
    res.redirect('/questions');
  },

  async questionPage(req, res) {
    const { id } = req.params;
    const question = await prisma.question.findFirst({
      where: {
        id,
      },
    });
    res.render('question', { question });
  },
  async updatePage(req, res) {
    const { id } = req.params;
    const dataQuestion = await prisma.question.findFirst({
      where: {
        id,
      },
    });
    res.render('updateQuestion', { dataQuestion });
  },

  async update(req, res) {
    const { id } = req.params;
    const { question, start, end } = req.body;
    await prisma.question.update({
      where: { id },
      data: {
        question,
        start,
        end,
      },
    });
    res.redirect(`/questions/${id}`);
  },

  async delete(req, res) {
    const { id } = req.params;
    await prisma.question.delete({
      where: {
        id,
      },
    });
    res.redirect('/questions');
  },
};

module.exports = questionController;
