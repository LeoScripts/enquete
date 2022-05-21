'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false
      },
      start: {
        type: Sequelize.STRING,
        allowNull: false
      },
      end: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('questions');
  }
};
