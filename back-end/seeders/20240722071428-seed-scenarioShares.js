'use strict';
const { v4: uuidv4 } = require('uuid');
const scenario = require("../services/scenarioId");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ScenarioShares', [
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[0],
        share_id: 'AAPL',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[0],
        share_id: 'MSFT',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[1],
        share_id: 'AMZN',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[1],
        share_id: 'TSLA',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[2],
        share_id: 'GOOGL',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[2],
        share_id: 'FB',
      
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[3],
        share_id: 'NFLX',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[3],
        share_id: 'NVDA',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[4],
        share_id: 'PYPL',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[4],
        share_id: 'ADBE',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[5],
        share_id: 'CRM',
      
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[5],
        share_id: 'INTC',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[6],
        share_id: 'CSCO',
      
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[6],
        share_id: 'ORCL',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[7],
        share_id: 'IBM',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[7],
        share_id: 'AAPL',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[8],
        share_id: 'MSFT',
    
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[8],
        share_id: 'AMZN',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[9],
        share_id: 'TSLA',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[9],
        share_id: 'GOOGL',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[10],
        share_id: 'FB',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[10],
        share_id: 'NFLX',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[11],
        share_id: 'NVDA',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[11],
        share_id: 'PYPL',
      
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[12],
        share_id: 'ADBE',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[12],
        share_id: 'CRM',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[13],
        share_id: 'INTC',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[13],
        share_id: 'CSCO',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[14],
        share_id: 'ORCL',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[14],
        share_id: 'IBM',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[15],
        share_id: 'AAPL',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario[15],
        share_id: 'MSFT',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario17,
        share_id: 'AMZN',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario17,
        share_id: 'TSLA',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario18,
        share_id: 'GOOGL',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario18,
        share_id: 'FB',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario19,
        share_id: 'NFLX',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario19,
        share_id: 'NVDA',
       
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario20,
        share_id: 'PYPL',
        
      },
      {
        scenario_share_id: uuidv4(),
        scenario_id: scenario20,
        share_id: 'ADBE',
       
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ScenarioShares', null, {});
  }
};