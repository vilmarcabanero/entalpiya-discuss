"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../src/app");
const posts_utils_1 = require("./posts.utils");
const baseUrl = '/api/discuss';
describe('getAllPosts GET /posts/all', () => {
    it('Returns an empty array if there are no posts.', async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .get(baseUrl + '/posts/all')
            .send()
            .expect(200);
        expect(response.body.length).toBe(0);
    });
    it('Returns an array with a single post in it equal to the created post.', async () => {
        await (0, posts_utils_1.createPost)();
        const response = await (0, supertest_1.default)(app_1.app)
            .get(baseUrl + '/posts/all')
            .send()
            .expect(200);
        expect(JSON.stringify(response.body[0])).toBe(JSON.stringify(posts_utils_1.postCreated));
    });
});
//# sourceMappingURL=posts.getAllPosts.test.js.map