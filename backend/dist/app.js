"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_1 = __importDefault(require("@/middlewares/error"));
const Dummy_1 = __importDefault(require("./routes/Dummy"));
class App {
    constructor(controllers, port) {
        this.express = (0, express_1.default)();
        this.port = port;
        this.initializeDatabaseConnection();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    initializeMiddleware() {
        this.express.use((0, cors_1.default)());
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.express.use('/', controller.router);
        });
        this.express.use('/test/', new Dummy_1.default().router);
    }
    initializeErrorHandling() {
        this.express.use(error_1.default);
    }
    initializeDatabaseConnection() {
    }
    listen() {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
