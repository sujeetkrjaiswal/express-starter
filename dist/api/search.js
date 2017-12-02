"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = require("../helpers/logger");
const searchRouter = express_1.Router();
searchRouter.use((req, res, next) => {
    logger_1.logInfo(`Search API ${Date.now()}`);
    next();
});
searchRouter.get('/', (req, res) => {
    res.json({
        status: 'OK',
        statusCode: 200,
        msg: 'Index API under Search',
    });
});
searchRouter.get('/about', (req, res) => {
    res.send('About the search API');
});
exports.default = searchRouter;
