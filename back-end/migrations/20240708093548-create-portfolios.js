'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Portfolio', {
      portfolio_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      player_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Player',
          key: 'player_id',
        },
      },
      balance_without_shares: {
        type: Sequelize.FLOAT,
        defaultValue: 10000,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Portfolio');
  },
};