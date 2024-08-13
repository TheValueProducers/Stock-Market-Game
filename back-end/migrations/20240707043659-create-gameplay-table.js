module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gameplay', {
      game_play_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      period_name: {
        type: Sequelize.STRING,
        unique: true
      },
      start_event_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_event_date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Gameplay');
  }
};