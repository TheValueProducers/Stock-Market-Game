// redisClient.js
const redis = require('redis');

// Initialize Redis client
const redisClient = redis.createClient();


redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

redisClient.on('connect', () => {
  console.log('Redis client connected');
});

redisClient.on('ready', () => {
  console.log('Redis client ready');
});

// Export the Redis client
module.exports = redisClient;