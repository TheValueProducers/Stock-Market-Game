const { v4: uuidv4 } = require('uuid');

// Function to generate and store a set number of company IDs
const generateScenarioIds = (num) => {
  const scenarioIds = [];

  for (let i = 1; i <= num; i++) {
    companyIds.push(uuidv4())
  }

  return scenarioIds;
};
const scenarioId = generateScenarioIds(15)
module.exports = scenarioId;