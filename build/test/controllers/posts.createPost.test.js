"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../src/app");
const posts_utils_1 = require("./posts.utils");
const baseUrl = '/api/discuss';
describe('createPost - POST /posts/create', () => {
    it(`Responds 201 and returns the created post.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(posts_utils_1.postCreated)
            .expect(201);
        expect(response.body).toEqual(posts_utils_1.postCreated);
    });
    it('Responds 401 if not logged in.', async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .send();
        expect(response.body.httpCode).toBe(401);
    });
    it(`Responds 400 with message "_id is required." if _id is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { _id: null }))
            .expect(400);
        expect(response.body.message).toBe('_id is required.');
    });
    it(`Responds 400 with message "userId is required." if userId is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { userId: null }))
            .expect(400);
        expect(response.body.message).toBe('userId is required.');
    });
    it(`Responds 400 with message "message is required." if message is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { userId: null }))
            .expect(400);
        expect(response.body.message).toBe('userId is required.');
    });
    it(`Responds 400 with message "hidden is required." if hidden is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { hidden: null }))
            .expect(400);
        expect(response.body.message).toBe('hidden is required.');
    });
    it(`Responds 400 with message "createdAt is required." if createdAt is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { createdAt: null }))
            .expect(400);
        expect(response.body.message).toBe('createdAt is required.');
    });
    it(`Responds 400 with message "updatedAt is required." if updatedAt is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { updatedAt: null }))
            .expect(400);
        expect(response.body.message).toBe('updatedAt is required.');
    });
    it(`Responds 400 with message "version is required." if version is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { version: null }))
            .expect(400);
        expect(response.body.message).toBe('version is required.');
    });
    it(`Responds 400 with message "likers is required." if likers is missing.`, async () => {
        const response = await (0, supertest_1.default)(app_1.app)
            .post(baseUrl + '/posts/create')
            .set('Authorization', `Bearer ${await (0, posts_utils_1.token)()}`)
            .send(Object.assign(Object.assign({}, posts_utils_1.postCreated), { likers: null }))
            .expect(400);
        expect(response.body.message).toBe('likers is required.');
    });
});
//# sourceMappingURL=posts.createPost.test.js.map