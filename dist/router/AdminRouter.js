"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminRouter = (0, express_1.Router)();
AdminRouter.get("/healthcheck", (req, res) => {
    res.send("Admin Healthcheck");
});
exports.default = AdminRouter;
