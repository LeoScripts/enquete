const prisma = require('../database/client');

const answerController = {
  async read(req, res) {
    const data = await prisma.answer.findMany();
    return res.render('answers', { data });
  },

  createPage(req, res) {
    res.render('createAnswer');
  },

  async save(req, res) {
    const { answer } = req.body;
    await prisma.answer.create({
      data: {
        answer,
      },
    });
    res.redirect('/answers');
  },

  async updatePage(req, res) {
    const { id } = req.params;
    const dataAnswer = await prisma.answer.findFirst({
      where: {
        id,
      },
    });
    res.render('updateAnswer', { dataAnswer });
  },

  async update(req, res) {
    const { id } = req.params;
    const { answer } = req.body;
    await prisma.answer.update({
      where: { id },
      data: {
        answer,
      },
    });
    res.redirect('/answers');
  },

  async delete(req, res) {
    const { id } = req.params;
    await prisma.answer.delete({
      where: {
        id,
      },
    });
    res.redirect('/answers');
  },
};

module.exports = answerController;
