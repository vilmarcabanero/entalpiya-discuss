"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../src/app");
describe('app', () => {
    it('responds 404 for endpoints not existing.', async () => {
        await (0, supertest_1.default)(app_1.app).get('/api/discuss/foobar').send().expect(404);
    });
});
//# sourceMappingURL=app.test.js.map