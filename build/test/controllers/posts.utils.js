"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.token = exports.postCreated = void 0;
const app_1 = require("../../src/app");
const supertest_1 = __importDefault(require("supertest"));
const baseUrl = '/api/discuss';
exports.postCreated = {
    _id: '3b1df2e0feb64e19ad003e1aa7ddbf12',
    userId: '63261578152a836ab456e929',
    message: '1st post - Vil',
    likers: new Array(),
    hidden: false,
    createdAt: '2022-09-23T16:37:18.479Z',
    updatedAt: '2022-09-23T16:37:18.479Z',
    version: 0,
};
async function token() {
    return global.login();
}
exports.token = token;
async function createPost() {
    await (0, supertest_1.default)(app_1.app)
        .post(baseUrl + '/posts/create')
        .set('Authorization', `Bearer ${await token()}`)
        .send(exports.postCreated);
}
exports.createPost = createPost;
//# sourceMappingURL=posts.utils.js.map