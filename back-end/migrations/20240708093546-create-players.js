module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Player', {
      player_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      game_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Game',
          key: 'game_id'
        }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      joined_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Player');
  }
};