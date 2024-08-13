const socketIo = require("socket.io");
const connection = require("./events/connection");
const roomEvents = require("./events/room");  // Import the room events
const gameEvents = require("./events/game")


function initializeSocketIo(server) {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"]
    }
  });

  io.on('connection', (socket) => {
    connection(io, socket);  // Handle general connection events
    roomEvents(io, socket);   // Handle room-related events
    gameEvents(io, socket)
  });

  

  return io;
}

module.exports = initializeSocketIo;