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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreatePost = void 0;
const express_validator_1 = require("express-validator");
const S = __importStar(require("@entalpiya/common"));
const validator_utils_1 = require("./validator.utils");
async function validateCreatePost(req, _res, next) {
    await (0, express_validator_1.body)('_id').notEmpty().withMessage('_id is required.').run(req);
    await (0, express_validator_1.body)('userId').notEmpty().withMessage('userId is required.').run(req);
    await (0, express_validator_1.body)('message').notEmpty().withMessage('message is required.').run(req);
    await (0, express_validator_1.body)('hidden').notEmpty().withMessage('hidden is required.').run(req);
    await (0, express_validator_1.body)('createdAt')
        .notEmpty()
        .withMessage('createdAt is required.')
        .run(req);
    await (0, express_validator_1.body)('updatedAt')
        .notEmpty()
        .withMessage('updatedAt is required.')
        .run(req);
    await (0, express_validator_1.body)('version').notEmpty().withMessage('version is required.').run(req);
    await (0, express_validator_1.body)('likers').isArray().withMessage('likers is required.').run(req);
    if (!(0, validator_utils_1.result)(req).isEmpty()) {
        throw new S.BadRequestException((0, validator_utils_1.result)(req).array()[0]);
    }
    next();
}
exports.validateCreatePost = validateCreatePost;
//# sourceMappingURL=posts.validateCreatePost.js.map