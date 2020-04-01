const redis = require("redis");
const redisDB = redis.createClient();

redisDB.on("error", function(error) {
  console.error(error);
});

redisDB.on('end', () => console.log('closing Redis'));

module.exports = redisDB;