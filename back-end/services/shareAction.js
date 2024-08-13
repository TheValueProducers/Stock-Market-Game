const redisClient = require("../config/redisClient")


async function buyShares(playerId, gameId, stock, price, quantity) {
  try {
    // Create Redis keys incorporating the gameId
    const cashKey = `${gameId}:${playerId}:cash`;
    const portfolioKey = `${gameId}:${playerId}:portfolio:${stock}`;

    // Fetch the player's cash
    let cash = await redisClient.get(cashKey);

    // If no cash is found for the player, exit the function
    if (cash === null) {
      console.error(`Player with ID ${playerId} not found in game ${gameId}`);
      return;
    }

    const totalCost = price * quantity;

    // Check if the player has enough cash
    if (parseFloat(cash) < totalCost) {
      console.error(`Player with ID ${playerId} in game ${gameId} does not have enough funds to buy ${quantity} of ${stock}`);
      return;
    }

    // Deduct the cash and update in Redis
    const newCash = parseFloat(cash) - totalCost;
    await redisClient.set(cashKey, newCash);

    // Fetch the player's portfolio for the given stock
    let stockQuantity = await redisClient.get(portfolioKey);

    if (stockQuantity) {
      // If the stock already exists in the portfolio, update the quantity
      const newQuantity = parseInt(stockQuantity, 10) + quantity;
      await redisClient.set(portfolioKey, newQuantity);
    } else {
      // Otherwise, create a new entry in the portfolio
      await redisClient.set(portfolioKey, quantity);
    }

    // Successfully updated Redis, function ends here
  } catch (error) {
    console.error('Error buying shares:', error);
  }
}



async function sellShares(playerId, gameId, stock, price, quantity) {
  try {
    // Create Redis keys incorporating the gameId
    const portfolioKey = `${gameId}:${playerId}:portfolio:${stock}`;
    const cashKey = `${gameId}:${playerId}:cash`;

    // Fetch the player's stock quantity
    let stockQuantity = await redisClient.get(portfolioKey);

    // If the stock is not found in the portfolio, exit the function
    if (stockQuantity === null) {
      console.error(`Stock ${stock} not found in portfolio for player ${playerId} in game ${gameId}`);
      return;
    }

    // Check if the player has enough shares to sell
    if (parseInt(stockQuantity, 10) < quantity) {
      console.error(`Player ${playerId} in game ${gameId} does not have enough shares of ${stock} to sell ${quantity}`);
      return;
    }

    // Calculate the proceeds from the sale
    const saleProceeds = price * quantity;

    // Update the stock quantity in the portfolio
    const newQuantity = parseInt(stockQuantity, 10) - quantity;
    if (newQuantity === 0) {
      await redisClient.del(portfolioKey); // Remove the stock from the portfolio if all shares are sold
    } else {
      await redisClient.set(portfolioKey, newQuantity);
    }

    // Update the player's cash balance
    let cash = await redisClient.get(cashKey);
    const newCash = parseFloat(cash) + saleProceeds;
    await redisClient.set(cashKey, newCash);

    // Successfully updated Redis, function ends here

  } catch (error) {
    console.error('Error selling shares:', error);
  }
}

async function sendPortfolio(playerId, gameId, io, socket) {
  try {
    // Fetch all keys related to the player's portfolio for the specific game
    const stockKeys = await redisClient.keys(`${gameId}:${playerId}:portfolio:*`);
    

    // If there are no stocks in the portfolio, return an empty array
    if (stockKeys.length === 0) {
      io.to(socket.id).emit('portfolio', []); // Emit an empty array with a specific event name
      return;
    }

    // Fetch quantities for all stocks
    const stockQuantities = await redisClient.mGet(stockKeys);

    // Map the stock keys and quantities to an array of objects
    const portfolio = stockKeys.map((key, index) => {
      const stock = key.split(':').pop(); // Extract the stock symbol from the key
      return {
        stock: stock, // Use 'stock' as the key name
        quantity: parseInt(stockQuantities[index], 10) // Use 'quantity' as the key name
      };
    });

    // Emit the portfolio to the player
    io.to(socket.id).emit('portfolio', portfolio); // Emit the portfolio data with a specific event name

  } catch (error) {
    console.error("Error getting player's portfolio:", error);
    io.to(socket.id).emit('portfolio', { error: 'Internal Server Error' }); // Emit an error message
  }
}

module.exports = {
  buyShares,
  sellShares,
  sendPortfolio
};