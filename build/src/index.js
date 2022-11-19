"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const S = __importStar(require("@entalpiya/common"));
let server;
const DBLog = new S.Logger('DATABASE');
const APPLog = new S.Logger('APPLICATION');
const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be dßefined');
    }
    console.clear();
    APPLog.logger.info(`Starting compilation in watch mode...`);
    APPLog.logger.info(`Watching for file changes.`);
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI, {});
        DBLog.logger.info(`Connected to MongoDB.`);
    }
    catch (err) {
        DBLog.logger.error(err);
    }
    const PORT = 4001;
    server = app_1.app.listen(PORT, () => {
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
    }
    else {
        process.exit(1);
    }
};
const unexpectedErrorHandler = (error) => {
    APPLog.logger.error(error);
    exitHandler();
};
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
//# sourceMappingURL=index.js.map