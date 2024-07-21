const { Scenario, Share, sequelize } = require('../models');

const getRandomScenarios = async (difficulty) => {
  try {
    const scenarios = await Scenario.findAll({
      where: { difficulty },
      include: [
        {
          model: Share,
          as: 'shares'
        }
      ],
      order: sequelize.random(),
      limit: 20
    });
    return scenarios;
  } catch (error) {
    console.error('Error fetching random scenarios:', error);
    throw error;
  }
};

module.exports = { getRandomScenarios };