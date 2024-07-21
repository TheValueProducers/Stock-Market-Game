'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SharePortfolioItems', {
      share_portfolio_item_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      portfolio_item_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'PortfolioItem',
          key: 'portfolio_item_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      share_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Share',
          key: 'share_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SharePortfolioItems');
  }
};