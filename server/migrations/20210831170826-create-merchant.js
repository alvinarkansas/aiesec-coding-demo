'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Merchants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      avg_rating: {
        type: Sequelize.FLOAT
      },
      is_currently_promo: {
        type: Sequelize.BOOLEAN
      },
      distance: {
        type: Sequelize.FLOAT
      },
      thumbnail_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Merchants');
  }
};