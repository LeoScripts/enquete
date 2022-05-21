const sequelize = require('sequelize')
const Answer = require('./AnswerModel')
const QuestionAnswer = require('./QuestionAnswerModel')

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start: {
      type: DataTypes.STRING,
      allowNull: false
    },
    end: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'question'
  });

  Question.belongsToMany(Answer, {
    through: {
      model: QuestionAnswer
    },
    foreignKey:'idQuestion',
    constraint: true
  })

  Answer.belongsToMany(Question, {
    through: {
      model: QuestionAnswer
    },
    foreignKey:'idAnswer',
    constraint: true
  })

  return Question
}