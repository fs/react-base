const fs = require('fs');
const dotenv = require('dotenv');

dotenv.load();

const appConfig = require(`./app/${process.env.NODE_ENV}.js`);
const gulpConfig = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  appDir: 'app',
  distDir: 'dist',
  tasksDir: 'tasks',
  configDir: 'config',
  dbDir: 'db',
  [process.env.NODE_ENV]: true
};

module.exports = Object.assign({}, appConfig, gulpConfig);
