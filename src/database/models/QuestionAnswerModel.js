module.exports = (sequelize, DataTypes) => {
  const QuestionAnswer = sequelize.define('QuestionAnswer', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

  }, {
    sequelize,
    tableName: 'questionAnswer',
  });
  return QuestionAnswer;
};
