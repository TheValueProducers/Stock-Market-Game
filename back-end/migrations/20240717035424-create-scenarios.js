module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Scenario', {
      scenario_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      game_play_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Gameplay',
          key: 'game_play_id'
        }
      },
      event_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Scenario');
  }
};