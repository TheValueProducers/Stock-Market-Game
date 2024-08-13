module.exports = function(io, socket) {
    console.log('A user connected:', socket.id);
  
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  
    // Add more connection-related events if necessary
  };