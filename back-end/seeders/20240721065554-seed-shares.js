'use strict';
const companyId = require("../services/companyId")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Share', [
      {
        share_id: 'AAPL',
        name: 'Apple Inc.',
        type: 'Tech',
        price: 145.09,
        previous_day_price: 144.00,
        recorded_at: new Date(),
        company_id: companyId[0]
      },
      {
        share_id: 'MSFT',
        name: 'Microsoft Corp.',
        type: 'Tech',
        price: 299.79,
        previous_day_price: 295.50,
        recorded_at: new Date(),
        company_id: companyId[1]
      },
      {
        share_id: 'AMZN',
        name: 'Amazon.com Inc.',
        type: 'E-commerce',
        price: 3450.00,
        previous_day_price: 3400.00,
        recorded_at: new Date(),
        company_id: companyId[2]
        
      },
      {
        share_id: 'TSLA',
        name: 'Tesla Inc.',
        type: 'Automotive',
        price: 730.91,
        previous_day_price: 725.50,
        recorded_at: new Date(),
        company_id: companyId[3]
      },
      {
        share_id: 'GOOGL',
        name: 'Alphabet Inc.',
        type: 'Tech',
        price: 2750.00,
        previous_day_price: 2700.00,
        recorded_at: new Date(),
        company_id: companyId[4]
      },
      {
        share_id: 'FB',
        name: 'Facebook Inc.',
        type: 'Social Media',
        price: 360.00,
        previous_day_price: 355.00,
        recorded_at: new Date(),
        company_id: companyId[5]
      },
      {
        share_id: 'NFLX',
        name: 'Netflix Inc.',
        type: 'Streaming',
        price: 550.00,
        previous_day_price: 540.00,
        recorded_at: new Date(),
        company_id: companyId[6]
      },
      {
        share_id: 'NVDA',
        name: 'NVIDIA Corp.',
        type: 'Tech',
        price: 220.00,
        previous_day_price: 215.00,
        recorded_at: new Date(),
        company_id: companyId[7]
      },
      {
        share_id: 'PYPL',
        name: 'PayPal Holdings Inc.',
        type: 'Finance',
        price: 275.00,
        previous_day_price: 270.00,
        recorded_at: new Date(),
        company_id: companyId[8]
      },
      {
        share_id: 'ADBE',
        name: 'Adobe Inc.',
        type: 'Tech',
        price: 650.00,
        previous_day_price: 640.00,
        recorded_at: new Date(),
        company_id: companyId[9]
      },
      {
        share_id: 'CRM',
        name: 'Salesforce.com Inc.',
        type: 'Tech',
        price: 245.00,
        previous_day_price: 240.00,
        recorded_at: new Date(),
        company_id: companyId[10]
      },
      {
        share_id: 'INTC',
        name: 'Intel Corp.',
        type: 'Tech',
        price: 55.00,
        previous_day_price: 54.00,
        recorded_at: new Date(),
        company_id: companyId[11]
      },
      {
        share_id: 'CSCO',
        name: 'Cisco Systems Inc.',
        type: 'Tech',
        price: 45.00,
        previous_day_price: 44.00,
        recorded_at: new Date(),
        company_id: companyId[12]
      },
      {
        share_id: 'ORCL',
        name: 'Oracle Corp.',
        type: 'Tech',
        price: 85.00,
        previous_day_price: 84.00,
        recorded_at: new Date(),
        company_id: companyId[13]
      },
      {
        share_id: 'IBM',
        name: 'International Business Machines Corp.',
        type: 'Tech',
        price: 130.00,
        previous_day_price: 129.00,
        recorded_at: new Date(),
        company_id: companyId[14]
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Share', null, {});
  }
};