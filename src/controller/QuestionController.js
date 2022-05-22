// const { PrismaClient } = require('@prisma/client');

const { prismaClient } = require('../database/client');

const questionController = {
  async read(req, res) {
    const questions = [
      {
        question: 'qual e o seu nome?',
      },
      {
        question: 'qual e o seu email?',
      },
      {
        question: 'qual e o seu apelido?',
      },
    ];
    return res.render(
      'questions',
      {
        questions,
      },
    );
  },
  async read2(req, res) {
    const questions = await prismaClient.question.findMany();

    return res.render(
      'questions',
      {
        questions,
      },
    );
  },
};

module.exports = questionController;
