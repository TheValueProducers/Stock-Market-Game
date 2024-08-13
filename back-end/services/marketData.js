const axios = require('axios');

const apiKey = 'IpY6woaXR6VYfqOzkYiAJL7nWMs5zhTu'; // Replace with your actual API key

const events = [
    { name: 'Federal Reserve Raises Interest Rates', startDate: '2006-02-01', endDate: '2006-02-28' },
    { name: 'Home Price Appreciation Slows', startDate: '2006-03-01', endDate: '2006-03-31' },
    { name: 'Housing Bubble Peaks', startDate: '2006-06-01', endDate: '2006-06-30' },
    { name: 'Subprime Mortgage Delinquencies Rise', startDate: '2006-09-01', endDate: '2006-09-30' },
    { name: 'HSBC Warns of Losses', startDate: '2007-02-01', endDate: '2007-02-28' },
    { name: 'New Century Financial Files for Bankruptcy', startDate: '2007-04-01', endDate: '2007-04-30' },
    { name: 'Bear Stearns Hedge Funds Collapse', startDate: '2007-06-01', endDate: '2007-06-30' },
    { name: 'Credit Rating Downgrades', startDate: '2007-07-01', endDate: '2007-07-31' },
    { name: 'BNP Paribas Freezes Funds', startDate: '2007-08-01', endDate: '2007-08-31' },
    { name: 'Northern Rock Bank Run', startDate: '2007-09-01', endDate: '2007-09-30' },
    { name: 'Dow Jones Hits Record High', startDate: '2007-10-01', endDate: '2007-10-31' },
    { name: 'U.S. Enters Recession', startDate: '2007-12-01', endDate: '2007-12-31' },
    { name: 'Countrywide Financial Acquired by Bank of America', startDate: '2008-01-01', endDate: '2008-01-31' },
    { name: 'Bear Stearns Collapse', startDate: '2008-03-01', endDate: '2008-03-31' },
    { name: 'Dow Jones Drops', startDate: '2008-06-01', endDate: '2008-06-30' },
    { name: 'IndyMac Bank Failure', startDate: '2008-07-01', endDate: '2008-07-31' },
    { name: 'Fannie Mae and Freddie Mac Bailout', startDate: '2008-07-01', endDate: '2008-07-31' },
    { name: 'Lehman Brothers Bankruptcy', startDate: '2008-09-01', endDate: '2008-09-30' },
    { name: 'AIG Bailout', startDate: '2008-09-01', endDate: '2008-09-30' },
    { name: 'TARP Implementation', startDate: '2008-10-01', endDate: '2008-10-31' }
];

async function fetchStockData(symbol) {
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}`;
    try {
        const response = await axios.get(url, {
            params: {
                from: events[0].startDate,
                to: events[events.length - 1].endDate,
                apikey: apiKey
            }
        });

        if (!response.data.historical) {
            console.error(`No historical data found for ${symbol}`);
            return null;
        }

        const sortedData = response.data.historical.sort((a, b) => new Date(a.date) - new Date(b.date));

        for (let i = 1; i < sortedData.length; i++) {
            const prevClose = sortedData[i - 1].close;
            const currClose = sortedData[i].close;

            sortedData[i].prev_day_change = ((currClose - prevClose) / prevClose) * 100;
        }

        return sortedData;
    } catch (error) {
        console.error(`Error fetching stock data for ${symbol}:`, error.message);
        return null;
    }
}

async function fetchFinancialMetrics(symbol) {
    const url = `https://financialmodelingprep.com/api/v3/ratios/${symbol}`;
    try {
        const response = await axios.get(url, {
            params: {
                period: 'annual',
                apikey: apiKey
            }
        });

        if (!response.data || !Array.isArray(response.data)) {
            console.error(`No financial metrics found for ${symbol}`);
            return null;
        }

        return response.data;
    } catch (error) {
        console.error(`Error fetching financial metrics for ${symbol}:`, error.message);
        return null;
    }
}

async function sendStockDataAndMetrics(io, room, symbols) {
    const allStockData = {};
    const allFinancialMetrics = {};

    // Fetch stock data and financial metrics for all symbols
    for (const symbol of symbols) {
        const stockData = await fetchStockData(symbol);
        const financialMetrics = await fetchFinancialMetrics(symbol);

        if (stockData && financialMetrics) {
            allStockData[symbol] = stockData;
            allFinancialMetrics[symbol] = financialMetrics;
        } else {
            console.error(`Failed to fetch data for symbol ${symbol}`);
        }
    }

    let datePosition = 0;
    const maxDataLength = Math.max(...Object.values(allStockData).map(data => data ? data.length : 0));

    const sendDataInterval = setInterval(() => {
        if (datePosition < maxDataLength) {
            const dataForDate = symbols.map(symbol => {
                const stockData = allStockData[symbol] ? allStockData[symbol][datePosition] : null;
                if (!stockData) {
                    console.error(`No stock data for ${symbol} at position ${datePosition}`);
                    return null;
                }

                const currentYear = new Date(stockData.date).getFullYear();
                const financialMetricsForYear = allFinancialMetrics[symbol]?.find(metric => 
                    new Date(metric.date).getFullYear() === currentYear
                );

                return {
                    symbol: symbol,
                    stockData: stockData,
                    financialMetrics: financialMetricsForYear || null
                };
            }).filter(item => item !== null);  // Filter out null items

            // Emit the data for this date to the room
            io.to(room).emit("stockDataAndMetrics", dataForDate);

            // Log the emitted data (for debugging purposes)
            console.log(`Data for date position ${datePosition}:`, dataForDate);

            // Move to the next date position
            datePosition++;
        } else {
            clearInterval(sendDataInterval);
        }
    }, 2000);
}
function sendScenarios(io, room) {
    events.forEach((event, index) => {
        setTimeout(() => {
            io.to(room).emit("scenario", event);
        }, index * 3000);  // Emit each scenario every 3 seconds
    });
}

module.exports = {
    fetchStockData,
    fetchFinancialMetrics,
    sendStockDataAndMetrics,
    sendScenarios
};