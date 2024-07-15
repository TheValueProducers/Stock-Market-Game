

function randomStockChange(stocks, gameDuration = 10, changeRates = [], updateCallback) {
    let gameDurationInSeconds = 60 * gameDuration;
    let specifiedChangeTimes = Array.from({ length: changeRates.length }, () => Math.floor(Math.random() * gameDurationInSeconds));

    // Sort the specifiedChangeTimes to apply changes in order
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
    let intervalId = setInterval(() => {
        currentTime++;

        stocks.forEach(stock => {
            let currentValue = stock.initialValue;
            const percentageChange = (Math.random() * (dailyChange * 2)) - dailyChange;

            // Apply the change rate if the currentTime matches a specified change time
            let changeRateIndex = specifiedChangeTimes.indexOf(currentTime);
            if (changeRateIndex !== -1) {
                currentValue += currentValue * (changeRates[changeRateIndex] / 100);
                console.log(`The ${stock} stock has changed for ${changeRates[changeRateIndex]}`);
                
            }

            currentValue += currentValue * (percentageChange / 100);
            currentValue = Math.max(0, currentValue);

            if (updateCallback) updateCallback(stock.name, currentValue);
        });
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, gameDurationInSeconds * 1000);
}

function randomBondChange(bonds, gameDuration = 30, changeRates = [], updateCallback) {
    let gameDurationInSeconds = 60 * gameDuration;
    let specifiedChangeTimes = Array.from({ length: changeRates.length }, () => Math.floor(Math.random() * gameDurationInSeconds));

    // Sort the specifiedChangeTimes to apply changes in order
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
    let intervalId = setInterval(() => {
        currentTime++;

        bonds.forEach(bond => {
            let currentValue = bond.initialValue;
            const percentageChange = (Math.random() * (dailyChange * 2)) - dailyChange;

            // Apply the change rate if the currentTime matches a specified change time
            let changeRateIndex = specifiedChangeTimes.indexOf(currentTime);
            if (changeRateIndex !== -1) {
                currentValue += currentValue * (changeRates[changeRateIndex] / 100);
            }

            currentValue += currentValue * (percentageChange / 100);
            currentValue = Math.max(0, currentValue);

            if (updateCallback) updateCallback(bond.name, currentValue);
        });
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        bonds.forEach(bond => {
            console.log(`Final Value for ${bond.name} after ${gameDuration} minutes: ${bond.initialValue.toFixed(2)}`);
        });
    }, gameDurationInSeconds * 1000);
}





module.exports = {randomStockChange, randomBondChange};