module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questionAnswer', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      idAnswer: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'answer',
          key: 'id',
        },
      },
      idQuestion: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'question',
          key: 'id',
        },
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('questionAnswer');
  },
};
