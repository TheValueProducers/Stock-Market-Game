const { sendStockDataAndMetrics } = require("../../services/marketData");

const {sendPortfolio, buyShares, sellShares} = require("../../services/shareAction")
const symbols = [
  "AAPL",  // Apple Inc.
  "MSFT",  // Microsoft Corporation
  "GOOGL", // Alphabet Inc. (formerly Google Inc.)
  "AMZN",  // Amazon.com Inc.
  "XOM",   // Exxon Mobil Corporation
  "GE",    // General Electric Company
  "JPM",   // JPMorgan Chase & Co.
  "C",     // Citigroup Inc.
  "BAC",   // Bank of America Corporation
  "WFC",   // Wells Fargo & Company
  "T",     // AT&T Inc.
  "VZ",    // Verizon Communications Inc.
  "PFE",   // Pfizer Inc.
  "JNJ",   // Johnson & Johnson
  "IBM",   // International Business Machines Corporation
  "CSCO",  // Cisco Systems, Inc.
  "KO",    // The Coca-Cola Company
  "PG",    // The Procter & Gamble Company
  "INTC",  // Intel Corporation
  "BA"     // The Boeing Company
];

module.exports = function (io, socket){
    socket.on('startGame', (roomName) => {
        console.log("Game starts for room ", roomName);
        sendStockDataAndMetrics(io, roomName, symbols)
  })
    socket.on('portfolio', (player_id, game_id) => {
        sendPortfolio(player_id, game_id, io, socket)
    })

    socket.on("buy", (player_id, game_id, stock, quantity, price) => {
        buyShares(player_id, game_id, stock, quantity, price)
    })

    socket.on("sell", (player_id, game_id, stock, quantity, price) => {
        sellShares(player_id, game_id, stock, quantity, price)
    })
}