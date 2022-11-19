"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_route_1 = require("./index.route");
const posts_route_1 = require("./posts.route");
const router = express_1.default.Router();
const defaultIRoute = [
    {
        path: '/',
        route: index_route_1.indexRouter,
    },
    {
        path: '/posts',
        route: posts_route_1.postsRouter,
    },
];
defaultIRoute.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
//# sourceMappingURL=_index.js.map