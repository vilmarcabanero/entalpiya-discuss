"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
let mongo;
beforeAll(async () => {
    process.env.JWT_KEY = 'asdfasdf';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const mongo = await mongodb_memory_server_1.MongoMemoryServer.create();
    const mongoUri = mongo.getUri();
    await mongoose_1.default.connect(mongoUri, {});
});
beforeEach(async () => {
    const collections = await mongoose_1.default.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany({});
    }
});
afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose_1.default.connection.close();
});
global.login = async () => {
    const email = 'vilmarcabanero@gmail.com';
    const username = 'vilmarcabanero';
    const id = '63261578152a836ab456e929';
    const userJwt = jsonwebtoken_1.default.sign({
        id,
        username,
        email,
    }, process.env.JWT_KEY);
    return userJwt;
};
//# sourceMappingURL=setup.js.map