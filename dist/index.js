"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const api_1 = require("./api");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.api();
        this.routes();
    }
    config() {
        this.app.use(morgan('common'));
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(helmet());
    }
    api() {
        this.app.use('/api', api_1.default);
    }
    routes() {
        this.app.use(express.static('public'));
        this.app.get('/test', (req, res) => {
            res.send('Welcome');
        });
    }
}
const app = Server.bootstrap().app;
app.listen(3000, (err) => {
    console.log(err, 'Started app server');
});
