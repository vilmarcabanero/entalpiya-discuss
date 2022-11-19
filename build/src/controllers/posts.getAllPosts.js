"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = void 0;
const post_model_1 = require("../models/post.model");
async function getAllPosts(req, res) {
    const allPosts = await post_model_1.Post.find();
    return res.send(allPosts);
}
exports.getAllPosts = getAllPosts;
//# sourceMappingURL=posts.getAllPosts.js.map