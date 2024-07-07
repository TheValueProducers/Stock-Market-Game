// stock.js
export function randomStockChange(initialValue, gameDuration = 10, updateCallback) {
    let currentValue = initialValue;
    let dailyChange;

    let gameDurationInSeconds = 60 * gameDuration;

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

    let intervalId = setInterval(() => {
        const percentageChange = (Math.random() * (dailyChange * 2)) - dailyChange;
        currentValue = currentValue + (currentValue * (percentageChange / 100));
        currentValue = Math.max(0, currentValue);
        console.log(`New Value: ${currentValue.toFixed(2)}`);
        if (updateCallback) updateCallback(currentValue);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log(`Final Value after ${gameDuration} minutes: ${currentValue.toFixed(2)}`);
    }, gameDurationInSeconds * 1000);
}

// bond.js
export function randomBondChange(initialValue, gameDuration = 30, updateCallback) {
    let currentValue = initialValue;
    let dailyChange;

    let gameDurationInSeconds = 60 * gameDuration;

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

    let intervalId = setInterval(() => {
        const percentageChange = (Math.random() * (dailyChange * 2)) - dailyChange;
        currentValue = currentValue + (currentValue * (percentageChange / 100));
        currentValue = Math.max(0, currentValue);
        console.log(`New Value: ${currentValue.toFixed(2)}`);
        if (updateCallback) updateCallback(currentValue);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log(`Final Value after ${gameDuration} minutes: ${currentValue.toFixed(2)}`);
    }, gameDurationInSeconds * 1000);
}