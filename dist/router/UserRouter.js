"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../pkg/user/controller/UserController"));
const UserRouter = (0, express_1.Router)();
UserRouter.get("/lotteries", UserController_1.default.GetAllLotteries);
exports.default = UserRouter;
