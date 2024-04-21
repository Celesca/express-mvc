import { Router } from "express";
import UserController from "../pkg/user/controller/UserController";

const UserRouter = Router();

UserRouter.get("/lotteries", UserController.GetAllLotteries )

export default UserRouter;