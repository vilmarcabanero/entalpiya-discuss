import jwt from 'jsonwebtoken';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

declare global {
  var login: () => Promise<string>;
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  const mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.login = async () => {
  const email = 'vilmarcabanero@gmail.com';
  const username = 'vilmarcabanero';
  const id = '63261578152a836ab456e929';

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id,
      username,
      email,
    },
    process.env.JWT_KEY!,
  );

  return userJwt;
};
