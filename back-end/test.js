function scenarioFluctuate(shareName, percentage = 20, duration, client) {
    
    const targetValue = startValue * 1.15; // Target value is 15% higher than the start value
    
    const interval = 2000; // Update interval is 100 milliseconds
    const steps = duration / interval; // Total number of steps
    let currentValue = startValue;
    let currentStep = 0;

    const intervalId = setInterval(() => {
        if (currentStep < steps) {
            // Calculate the increment with a small random fluctuation
            const increment = (targetValue - startValue) / steps;
            const fluctuation = (Math.random() * (percentage / 5) - (percentage / 10)) * increment; // Random fluctuation between -10% and 10% of increment
            currentValue += increment + fluctuation;

            // Update the value (e.g., display it on a web page)
            console.log(currentValue.toFixed(2));

            currentStep++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
}

function normalFluctuate(shareName, percentage, duration, client) {
    const interval = 2000;
    const steps = duration / interval; // Total number of steps
    let currentValue = startValue;
    let currentStep = 0;

    const intervalId = setInterval(() => {
        if (currentStep < steps) {
            // Generate a random fluctuation percentage within the specified range
            const fluctuation = (Math.random() * 2 - 1) * (percentage / 100) * startValue; // Random fluctuation between -5% and 5% of start value
            currentValue = startValue + fluctuation;

            // Update the value (e.g., display it on a web page)
            console.log(currentValue.toFixed(2));

            currentStep++;
        } else {
            clearInterval(intervalId);
            
        }
    }, interval);
}


const stockChanges = async (game_id, client) => {

}   





