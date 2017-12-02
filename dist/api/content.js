"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = require("../helpers/logger");
const contentRouter = express_1.Router();
contentRouter.use((req, res, next) => {
    logger_1.logInfo(`Content API ${Date.now()}`);
    next();
});
contentRouter.get('/', (req, res) => {
    res.json({
        status: 'OK',
        statusCode: 200,
        msg: 'Index API under content',
    });
});
contentRouter.get('/about', (req, res) => {
    res.send('About the content API');
});
exports.default = contentRouter;
