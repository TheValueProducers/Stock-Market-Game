'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Scenario', {
      scenario_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      game_play_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Gameplay',
          key: 'gameplay_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      difficulty: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['IGCSE', 'AS-Level', 'A-Level']],
        },
      },
      percentage_change_on_stock: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      percentage_change_on_bond: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      duration: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Scenario');
  }
};