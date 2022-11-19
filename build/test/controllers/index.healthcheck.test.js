"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../src/app");
describe('healthcheck GET /', () => {
    it('responds with Discuss Microservice is ok.', async () => {
        const response = await (0, supertest_1.default)(app_1.app).get('/api/discuss').send().expect(200);
        expect(response.text).toEqual('Discuss Microservice is ok.');
    });
});
//# sourceMappingURL=index.healthcheck.test.js.map