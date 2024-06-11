"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const app_1 = __importDefault(require("./app"));
const createServer = () => {
    const app = new app_1.default([], 3000);
    app.listen();
};
exports.createServer = createServer;
