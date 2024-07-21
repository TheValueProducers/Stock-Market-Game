'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transaction', {
      transaction_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'user_id',
        },
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      share_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Share',
          key: 'share_id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      game_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Game',
          key: 'game_id',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transaction');
  },
};