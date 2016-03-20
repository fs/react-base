import dotenv from 'dotenv';

dotenv.load();

export default {
  appDir: 'app',
  distDir: 'dist',
  configDir: 'config',
  mocksDir: 'mocks',
  ports: {
    mocks: 8001
  },
  [process.env.NODE_ENV]: true
};
