'use strict';

const {scenario1, scenario2, scenario3, scenario4, scenario5, scenario6, scenario7, scenario8, scenario9, scenario10,scenario11, scenario12, scenario13, scenario14, scenario15, scenario16, scenario17, scenario18, scenario19, scenario20} = require("../services/scenarioId")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Scenario', [
      {
        scenario_id: scenario1,
        description: 'Market Crash',
        difficulty: 'A-Level',
        percentage_change: -15.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario2,
        description: 'New Product Launch',
        difficulty: 'IGCSE',
        percentage_change: 10.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario3,
        description: 'Economic Recession',
        difficulty: 'A-Level',
        percentage_change: -20.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario4,
        description: 'Interest Rate Increase',
        difficulty: 'AS-Level',
        percentage_change: -5.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario5,
        description: 'CEO Resignation',
        difficulty: 'AS-Level',
        percentage_change: -8.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario6,
        description: 'New Market Entry',
        difficulty: 'IGCSE',
        percentage_change: 12.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario7,
        description: 'Natural Disaster',
        difficulty: 'A-Level',
        percentage_change: -18.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario8,
        description: 'Positive Earnings Report',
        difficulty: 'IGCSE',
        percentage_change: 15.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario9,
        description: 'Data Breach',
        difficulty: 'AS-Level',
        percentage_change: -10.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario10,
        description: 'Mergers and Acquisitions',
        difficulty: 'AS-Level',
        percentage_change: 7.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario11,
        description: 'Patent Approval',
        difficulty: 'IGCSE',
        percentage_change: 20.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario12,
        description: 'Regulatory Changes',
        difficulty: 'AS-Level',
        percentage_change: -6.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario13,
        description: 'Product Recall',
        difficulty: 'A-Level',
        percentage_change: -12.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario14,
        description: 'Positive Market Sentiment',
        difficulty: 'IGCSE',
        percentage_change: 8.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario15,
        description: 'Industry Decline',
        difficulty: 'A-Level',
        percentage_change: -14.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario16,
        description: 'Tax Cuts',
        difficulty: 'AS-Level',
        percentage_change: 5.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario17,
        description: 'Environmental Regulations',
        difficulty: 'AS-Level',
        percentage_change: -4.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario18,
        description: 'Labor Strike',
        difficulty: 'A-Level',
        percentage_change: -11.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario19,
        description: 'New Partnership',
        difficulty: 'IGCSE',
        percentage_change: 9.0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        scenario_id: scenario20,
        description: 'Market Expansion',
        difficulty: 'IGCSE',
        percentage_change: 10.0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Scenario', null, {});
  }
};