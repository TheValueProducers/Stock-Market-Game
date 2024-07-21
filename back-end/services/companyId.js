const { v4: uuidv4 } = require('uuid');

// Function to generate and store a set number of company IDs
const generateCompanyIds = (num) => {
  const companyIds = [];

  for (let i = 1; i <= num; i++) {
    companyIds.push(uuidv4())
  }

  return companyIds;
};
const companyId = generateCompanyIds(15)
module.exports = companyId;