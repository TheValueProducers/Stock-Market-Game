
module.exports = function(io, socket) {
    // Joining a room
    socket.on('joinRoom', (roomName) => {
      socket.join(roomName);
      console.log(`Socket ${socket.id} joined room ${roomName}`);
      
      // Notify other members in the room
      socket.to(roomName).emit('message', `User ${socket.id} has joined the room`);
    });

    
  
    // Leaving a room
    socket.on('leaveRoom', (roomName) => {
      socket.leave(roomName);
      console.log(`Socket ${socket.id} left room ${roomName}`);
      
      // Notify other members in the room
      socket.to(roomName).emit('message', `User ${socket.id} has left the room`);
    });
  
    // Sending a message to a specific room
    socket.on('messageRoom', ({ roomName, message }) => {
      io.to(roomName).emit('message', {
        user: socket.id,
        message: message
      });
    });
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  };