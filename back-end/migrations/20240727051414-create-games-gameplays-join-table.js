module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GamesGameplays', {
      game_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Game',
          key: 'game_id'
        }
      },
      game_play_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Gameplay',
          key: 'game_play_id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GamesGameplays');
  }
};