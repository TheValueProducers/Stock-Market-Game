const { getRandomScenarios } = require('./scenarioService');
const { Scenario, Share, sequelize } = require("../models");

const randomStockChange = async (client, difficulty, gameDuration = 10, updateCallback) => {
  try {
    const scenarios = await Scenario.findAll({
      include: [
        {
          model: Share,
          as: 'shares'
        }
      ],
      order: sequelize.random()
    });

    const stocks = scenarios.map(scenario => {
      console.log("Scenario:", scenario);
      return {
        name: scenario.shares[0]?.share_id,
        initialValue: scenario.shares[0]?.price || 0,
        description: scenario.description,
        changeRate: scenario.percentage_change
      };
    });

    console.log("Stocks:", stocks);

    let gameDurationInSeconds = 60 * gameDuration;
    let specifiedChangeTimes = Array.from({ length: stocks.length }, () => Math.floor(Math.random() * gameDurationInSeconds));

    specifiedChangeTimes.sort((a, b) => a - b);

    let dailyChange;
    switch (gameDuration) {
      case 10:
        dailyChange = 1.25;
        break;
      case 15:
        dailyChange = 0.72;
        break;
      case 30:
        dailyChange = 0.51;
        break;
      default:
        dailyChange = 1.25;
    }

    let currentTime = 0;
    let intervalId = setInterval(async () => {
      currentTime++;
      const updatedStocks = [];

      for (const [index, stock] of stocks.entries()) {
        let currentValue = stock.initialValue;
        const percentageChange = (Math.random() * (dailyChange * 2)) - dailyChange;

        if (specifiedChangeTimes[index] === currentTime) {
          currentValue += currentValue * (stock.changeRate / 100);
          console.log(`The ${stock.name} stock has changed for ${stock.changeRate}% because of ${stock.description}`);
        }

        currentValue += currentValue * (percentageChange / 100);
        currentValue = Math.max(0, currentValue);

        await client.set(`stock_${stock.name}`, currentValue);

        updatedStocks.push({ name: stock.name, newPrice: currentValue });
      }

      if (updateCallback) updateCallback(updatedStocks);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, gameDurationInSeconds * 1000);
  } catch (error) {
    console.error('Error in randomStockChange:', error);
  }
};

const randomBondChange = async (client, difficulty, gameDuration = 30, updateCallback) => {
  try {
    const scenarios = await getRandomScenarios(difficulty);
    console.log("Scenarios fetched:", scenarios);

    const bonds = scenarios.map(scenario => ({
      name: scenario.shares[0]?.share_id,
      initialValue: scenario.shares[0]?.price || 0,
      description: scenario.description,
      changeRate: scenario.percentage_change
    }));

    console.log("Bonds:", bonds);

    let gameDurationInSeconds = 60 * gameDuration;
    let specifiedChangeTimes = Array.from({ length: bonds.length }, () => Math.floor(Math.random() * gameDurationInSeconds));

    specifiedChangeTimes.sort((a, b) => a - b);

    let dailyChange;
    switch (gameDuration) {
      case 10:
        dailyChange = 0.32;
        break;
      case 15:
        dailyChange = 0.25;
        break;
      case 30:
        dailyChange = 0.20;
        break;
      default:
        dailyChange = 0.32;
    }

    let currentTime = 0;
    let intervalId = setInterval(async () => {
      currentTime++;
      const updatedBonds = [];

      for (const [index, bond] of bonds.entries()) {
        let currentValue = bond.initialValue;
        const percentageChange = (Math.random() * (dailyChange * 2)) - dailyChange;

        if (specifiedChangeTimes[index] === currentTime) {
          currentValue += currentValue * (bond.changeRate / 100);
        }

        currentValue += currentValue * (percentageChange / 100);
        currentValue = Math.max(0, currentValue);
        console.log(`Bond ${bond.name} updated to ${currentValue}`);
        await client.set(`bond_${bond.name}`, currentValue);

        updatedBonds.push({ name: bond.name, newPrice: currentValue });
      }

      if (updateCallback) updateCallback(updatedBonds);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      bonds.forEach(bond => {
        console.log(`Final Value for ${bond.name} after ${gameDuration} minutes: ${bond.initialValue.toFixed(2)}`);
      });
    }, gameDurationInSeconds * 1000);
  } catch (error) {
    console.error('Error in randomBondChange:', error);
  }
};

module.exports = { randomStockChange, randomBondChange };