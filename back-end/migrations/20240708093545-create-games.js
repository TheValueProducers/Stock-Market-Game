'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Games', {
      game_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      game_code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["IGCSE", "AS-Level", "A-Level"]] 
        }
      },
      time_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isIn: [["10", "15", "30"]] 
        }
      },
      host: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      end_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Games');
  },
};