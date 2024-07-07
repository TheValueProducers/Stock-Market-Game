function randomPercentageChange(initialValue, gameDuration = 10) {
    let currentValue = initialValue;
    let dailyChange;

    // Convert game duration from minutes to seconds
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

    // Update value every second
    let intervalId = setInterval(() => {
        const percentageChange = (Math.random() * (dailyChange * 2)) - dailyChange;
        currentValue = currentValue + (currentValue * (percentageChange / 100));
        currentValue = Math.max(0, currentValue);  // Ensure the value does not go below 0
        console.log(`New Value: ${currentValue.toFixed(2)}`);
    }, 1000);

    // Clear the interval after the specified game duration
    setTimeout(() => {
        clearInterval(intervalId);
        console.log(`Final Value after ${gameDuration} minutes: ${currentValue.toFixed(2)}`);
    }, gameDurationInSeconds * 1000);
}

// Example usage
randomPercentageChange(10000, 10);