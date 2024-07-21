'use strict';
const companyId = require("../services/companyId");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Company', [
      {
        company_id: companyId[0],
        sector: 'Tech',
        description: 'Apple Inc. is a technology company that designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories.',
        market_cap: 2000000,
        revenue: 500000,
        gross_profit_margin: 40.0,
        return_on_equity: 30.0,
        earnings_per_share: 5.0,
        debt_to_equity_ratio: 0.5,
      },
      {
        company_id: companyId[1],
        sector: 'Tech',
        description: 'Microsoft Corp. is a technology company that develops, licenses, and supports a range of software products, services, devices, and solutions.',
        market_cap: 1800000,
        revenue: 450000,
        gross_profit_margin: 38.0,
        return_on_equity: 28.0,
        earnings_per_share: 4.5,
        debt_to_equity_ratio: 0.4,
      },
      {
        company_id: companyId[2],
        sector: 'E-commerce',
        description: 'Amazon.com Inc. is an e-commerce company that offers a range of products and services through its websites.',
        market_cap: 1700000,
        revenue: 600000,
        gross_profit_margin: 42.0,
        return_on_equity: 32.0,
        earnings_per_share: 6.0,
        debt_to_equity_ratio: 0.6,
      },
      {
        company_id: companyId[3],
        sector: 'Automotive',
        description: 'Tesla Inc. designs, manufactures, and sells electric vehicles and energy storage products.',
        market_cap: 900000,
        revenue: 300000,
        gross_profit_margin: 35.0,
        return_on_equity: 25.0,
        earnings_per_share: 3.0,
        debt_to_equity_ratio: 0.7,
      },
      {
        company_id: companyId[4],
        sector: 'Tech',
        description: 'Alphabet Inc. is a holding company that provides online advertising services, operating through Google and other segments.',
        market_cap: 1600000,
        revenue: 550000,
        gross_profit_margin: 39.0,
        return_on_equity: 29.0,
        earnings_per_share: 5.5,
        debt_to_equity_ratio: 0.45,
      },
      {
        company_id: companyId[5],
        sector: 'Social Media',
        description: 'Facebook Inc. is a social media company that operates the Facebook platform for social networking and communication.',
        market_cap: 1000000,
        revenue: 400000,
        gross_profit_margin: 50.0,
        return_on_equity: 35.0,
        earnings_per_share: 7.0,
        debt_to_equity_ratio: 0.3,
      },
      {
        company_id: companyId[6],
        sector: 'Streaming',
        description: 'Netflix Inc. is a streaming entertainment service that provides TV series, documentaries, and feature films across a variety of genres and languages.',
        market_cap: 800000,
        revenue: 350000,
        gross_profit_margin: 45.0,
        return_on_equity: 27.0,
        earnings_per_share: 4.0,
        debt_to_equity_ratio: 0.5,
      },
      {
        company_id: companyId[7],
        sector: 'Tech',
        description: 'NVIDIA Corp. is a technology company that designs and sells GPUs for gaming, professional visualization, data center, and automotive markets.',
        market_cap: 700000,
        revenue: 320000,
        gross_profit_margin: 48.0,
        return_on_equity: 30.0,
        earnings_per_share: 4.5,
        debt_to_equity_ratio: 0.4,
      },
      {
        company_id: companyId[8],
        sector: 'Finance',
        description: 'PayPal Holdings Inc. operates as a technology platform company that enables digital and mobile payments on behalf of consumers and merchants.',
        market_cap: 650000,
        revenue: 290000,
        gross_profit_margin: 46.0,
        return_on_equity: 33.0,
        earnings_per_share: 5.0,
        debt_to_equity_ratio: 0.35,
      },
      {
        company_id: companyId[9],
        sector: 'Tech',
        description: 'Adobe Inc. operates as a diversified software company worldwide.',
        market_cap: 600000,
        revenue: 280000,
        gross_profit_margin: 50.0,
        return_on_equity: 32.0,
        earnings_per_share: 6.0,
        debt_to_equity_ratio: 0.3,
      },
      {
        company_id: companyId[10],
        sector: 'Tech',
        description: 'Salesforce.com Inc. develops enterprise cloud computing solutions with a focus on customer relationship management.',
        market_cap: 550000,
        revenue: 260000,
        gross_profit_margin: 44.0,
        return_on_equity: 28.0,
        earnings_per_share: 5.5,
        debt_to_equity_ratio: 0.4,
      },
      {
        company_id: companyId[11],
        sector: 'Tech',
        description: 'Intel Corp. is a semiconductor company that designs, manufactures, and sells computer components and related products.',
        market_cap: 500000,
        revenue: 240000,
        gross_profit_margin: 52.0,
        return_on_equity: 35.0,
        earnings_per_share: 6.5,
        debt_to_equity_ratio: 0.25,
      },
      {
        company_id: companyId[12],
        sector: 'Tech',
        description: 'Cisco Systems Inc. designs, manufactures, and sells Internet Protocol-based networking and other products related to the communications and IT industry.',
        market_cap: 450000,
        revenue: 220000,
        gross_profit_margin: 47.0,
        return_on_equity: 29.0,
        earnings_per_share: 5.0,
        debt_to_equity_ratio: 0.35,
      },
      {
        company_id: companyId[13],
        sector: 'Tech',
        description: 'Oracle Corp. provides products and services that address enterprise information technology environments worldwide.',
        market_cap: 400000,
        revenue: 210000,
        gross_profit_margin: 49.0,
        return_on_equity: 31.0,
        earnings_per_share: 5.5,
        debt_to_equity_ratio: 0.3,
      },
      {
        company_id: companyId[14],
        sector: 'Tech',
        description: 'International Business Machines Corp. provides integrated solutions and services worldwide.',
        market_cap: 350000,
        revenue: 200000,
        gross_profit_margin: 45.0,
        return_on_equity: 28.0,
        earnings_per_share: 5.0,
        debt_to_equity_ratio: 0.4,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Company', null, {});
  }
};