const axios = require('axios');

const apiKey = 'IpY6woaXR6VYfqOzkYiAJL7nWMs5zhTu'; // Replace with your actual API key
const symbol = 'AIG'; // Example symbol, replace as needed

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
        // Sort the stock data by date from oldest to newest
        return response.data.historical.sort((a, b) => new Date(a.date) - new Date(b.date));
    } catch (error) {
        console.error(`Error fetching stock data for ${symbol}:`, error);
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
        return response.data;
    } catch (error) {
        console.error(`Error fetching financial metrics for ${symbol}:`, error);
        return null;
    }
}

async function printStockData(event, stocks, metrics) {
    let currentYear = null;
    let yearlyMetrics = null;

    for (const entry of stocks) {
        const entryYear = new Date(entry.date).getFullYear();
        if (entryYear !== currentYear) {
            currentYear = entryYear;
            yearlyMetrics = metrics.find(metric => new Date(metric.date).getFullYear() === currentYear);
            if (!yearlyMetrics) {
                console.error(`No financial metrics available for ${symbol} in ${currentYear}`);
                continue;
            }
        }

        console.log(`Event: ${event.name}`);
        console.log(`Date: ${entry.date}`);
        console.log(`Symbol: ${symbol}`);
        console.log(`Open: ${entry.open}`);
        console.log(`High: ${entry.high}`);
        console.log(`Low: ${entry.low}`);
        console.log(`Close: ${entry.close}`);
        console.log(`Volume: ${entry.volume}`);
        console.log('---');
        console.log(`Financial Metrics for ${currentYear}:`);
        console.log(`Market Cap: ${yearlyMetrics.marketCap}`);
        console.log(`P/E Ratio: ${yearlyMetrics.priceEarningsRatio}`);
        console.log(`EPS: ${yearlyMetrics.eps}`);
        console.log(`Dividend Yield: ${yearlyMetrics.dividendYield}`);
        console.log(`Book Value per Share: ${yearlyMetrics.bookValuePerShare}`);
        console.log(`P/B Ratio: ${yearlyMetrics.priceToBookRatio}`);
        console.log(`ROE: ${yearlyMetrics.returnOnEquity}`);
        console.log(`Debt-to-Equity Ratio: ${yearlyMetrics.debtEquityRatio}`);
        console.log(`Net Profit Margin: ${yearlyMetrics.netProfitMargin}`);
        console.log(`Revenue: ${yearlyMetrics.revenue}`);
        console.log('---');
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function processEvent(event, stocks, metrics) {
    console.log(`Event: ${event.name} (${event.startDate} to ${event.endDate}) announced!`);
    const eventStocks = stocks.filter(stock => new Date(stock.date) >= new Date(event.startDate) && new Date(stock.date) <= new Date(event.endDate));
    if (!eventStocks || eventStocks.length === 0) {
        console.error(`No stock data available for ${symbol} during ${event.name}`);
        return;
    }
    await printStockData(event, eventStocks, metrics);
}

async function runTimeline() {
    const stocks = await fetchStockData(symbol);
    const metrics = await fetchFinancialMetrics(symbol);
    if (!stocks || !metrics) {
        console.error('Error fetching initial data');
        return;
    }

    for (const event of events) {
        await processEvent(event, stocks, metrics);
    }
}

runTimeline();