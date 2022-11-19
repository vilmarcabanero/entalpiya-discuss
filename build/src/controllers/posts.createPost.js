"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const post_model_1 = require("../models/post.model");
async function createPost(req, res) {
    const payload = req.body;
    const createdPost = await post_model_1.Post.build(payload).save();
    return res.status(201).send(createdPost);
}
exports.createPost = createPost;
//# sourceMappingURL=posts.createPost.js.map