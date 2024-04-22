import { Router } from "express";

const AdminRouter = Router();

AdminRouter.get("/healthcheck", (req, res) => {
    res.send("Admin Healthcheck")
})

export default AdminRouter;