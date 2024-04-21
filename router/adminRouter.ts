import { Router } from "express";

const AdminRouter = Router();

AdminRouter.get("/", (req, res) => {
    res.send("Admin route");
})

export default AdminRouter;