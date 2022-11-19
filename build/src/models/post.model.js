"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    likers: {
        type: [String],
        required: true,
        default: [],
    },
    hidden: {
        type: Boolean,
        required: true,
        default: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    version: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false,
});
postSchema.statics.build = (attrs) => {
    return new Post(attrs);
};
const Post = mongoose_1.default.model('Post', postSchema);
exports.Post = Post;
//# sourceMappingURL=post.model.js.map