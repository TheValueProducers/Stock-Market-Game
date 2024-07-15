const {randomBondChange, randomStockChange} = require("./sharePrices")
const {Game} = require("../models")
const handleSocketConnection = (io) => {
    io.on('connection', (socket) => {
      console.log('a user connected');
  
      socket.on('join game', async (room) => {
        socket.join(room);
     

      });

      socket.on('start game', (room) => {
        randomStockChange(10000, 100, 10, (stock, value) => {
            io.to(room).emit("stock price", {newPrice: value})
        })
      })

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  };
  
  module.exports = handleSocketConnection;