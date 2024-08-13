module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Game', {
      game_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      game_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'User',
          key: 'user_id'
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      end_at: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('Game');
  }
};