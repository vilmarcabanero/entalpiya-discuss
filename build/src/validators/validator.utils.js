"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
const express_validator_1 = require("express-validator");
const errorFormatter = ({ msg }) => msg;
function result(req) {
    return (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
}
exports.result = result;
//# sourceMappingURL=validator.utils.js.map