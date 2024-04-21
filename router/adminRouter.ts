import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/", (req, res) => {
    res.send("Admin route");
})

export default adminRouter;