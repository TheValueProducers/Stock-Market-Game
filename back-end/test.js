const buyShares = (portfolio, stock, quantity, price) => {
    if (!portfolio[stock]) {
      portfolio[stock] = { shares: 0, avgPrice: 0 };
    }
  
    const oldShares = portfolio[stock].shares;
    const oldAvgPrice = portfolio[stock].avgPrice;
  
    const newShares = oldShares + quantity;
    const newAvgPrice = ((oldShares * oldAvgPrice) + (quantity * price)) / newShares;
  
    portfolio[stock].shares = newShares;
    portfolio[stock].avgPrice = newAvgPrice;
  
    return portfolio;
}
  
  // Example Usage
let  portfolio = buyShares(portfolio, 'AAPL', 10, 150);  // Buy 10 shares of AAPL at $150 each
  portfolio = buyShares(portfolio, 'AAPL', 5, 160);   // Buy 5 more shares of AAPL at $160 each
  console.log(portfolio);