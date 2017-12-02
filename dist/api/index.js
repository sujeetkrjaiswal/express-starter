"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const content_1 = require("./content");
const search_1 = require("./search");
const apiRouter = express_1.Router();
apiRouter.use('/content', content_1.default);
apiRouter.use('/search', search_1.default);
exports.default = apiRouter;
