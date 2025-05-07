// config.js
require('dotenv').config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  DB_PATH: process.env.DB_PATH || './habit-tracker.db',
};