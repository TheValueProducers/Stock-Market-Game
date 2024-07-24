const { randomBondChange, randomStockChange } = require("./sharePrices");
const { Game } = require("../models");

const handleSocketConnection = (io, client) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join game', async (room) => {
      console.log(`User joined room: ${room}`);
      socket.join(room);
    });

    socket.on('start game', async (room) => {
      try {
        console.log("I am REACHED -1");
        const game = await Game.findOne({ where: { game_id: room } });
        
        if (!game) {
          console.log(`Game with ID ${room} not found`);
          return;
        }

        const difficulty = game.difficulty;
        console.log(`I am REACHED 0, Difficulty: ${difficulty}`);
        
        randomStockChange(client, difficulty, 10, (stocks) => {
          console.log(stocks);
          io.to(room).emit("stock price", stocks );
        });
      } catch (err) {
        console.error(err);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

module.exports = handleSocketConnection;