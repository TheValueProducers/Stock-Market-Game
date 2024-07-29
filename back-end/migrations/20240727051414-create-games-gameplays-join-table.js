'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GamesGameplays', {
      game_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'Game',
          key: 'game_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      gameplay_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'Gameplay',
          key: 'gameplay_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GamesGameplays');
  },
};