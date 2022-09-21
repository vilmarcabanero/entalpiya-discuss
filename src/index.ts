import mongoose from 'mongoose';
import { app } from './app';
import * as S from '@entropiya/common';

let server: any;

const DBLog = new S.Logger('DATABASE');
const APPLog = new S.Logger('APPLICATION');

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  console.clear();
  APPLog.logger.info(`Starting compilation in watch mode...`);
  APPLog.logger.info(`Watching for file changes.`);
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    DBLog.logger.info(`Connected to MongoDB.`);
  } catch (err) {
    DBLog.logger.error(err);
  }

  const PORT = 3000;
  server = app.listen(PORT, () => {
    APPLog.logger.info(`Listening on port ${PORT}.`);
  });
};

start();

const exitHandler = () => {
  if (server) {
    server.close(() => {
      APPLog.logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: string) => {
  APPLog.logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);