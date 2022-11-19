"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = __importDefault(require("express"));
const _index_1 = require("../controllers/_index");
const router = express_1.default.Router();
exports.indexRouter = router;
router.get('/', _index_1.healthcheck);
//# sourceMappingURL=index.route.js.map