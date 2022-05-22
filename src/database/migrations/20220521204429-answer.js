module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('answer', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('answer');
  },
};
