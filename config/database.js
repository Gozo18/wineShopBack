const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      host: env('DATABASE_HOST','0.0.0.0'),
      port: env.int('DATABASE_PORT','1337'),
      database: env('DATABASE_NAME','appdb'),
    },
    useNullAsDefault: true,
  },
});
 