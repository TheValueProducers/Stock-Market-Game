'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Company', {
      company_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      sector: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      market_cap: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      revenue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      gross_profit_margin: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      return_on_equity: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      earnings_per_share: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      debt_to_equity_ratio: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Company');
  },
};