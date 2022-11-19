"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthcheck = void 0;
async function healthcheck(req, res) {
    return res.status(200).send('Discuss Microservice is ok.');
}
exports.healthcheck = healthcheck;
//# sourceMappingURL=index.healthcheck.js.map