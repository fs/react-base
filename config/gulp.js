import dotenv from 'dotenv';

dotenv.load();

export default {
  appDir: 'app',
  distDir: 'dist',
  tasksDir: 'tasks',
  configDir: 'config',
  dbDir: 'db',
  ports: {
    api: 8001
  }
};
