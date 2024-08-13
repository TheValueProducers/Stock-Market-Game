'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GameplayShares', {
      game_play_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Gameplay',
          key: 'game_play_id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      share_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Share',
          key: 'share_id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GameplayShares');
  }
};