"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class DummyController {
    constructor() {
        this.path = "/";
        this.router = (0, express_1.Router)();
        this.get = (req, res, next) => {
            res.status(200).json({
                message: "OK!"
            });
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.get);
    }
    ;
}
exports.default = DummyController;
