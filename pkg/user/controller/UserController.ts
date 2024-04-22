import { Request, Response } from "express";
import UserService from "../service/UserService";

async function GetAllLotteries(req: Request, res: Response) {
    const Lotteries:any = await UserService.GetAllLotteries();
    res.json(Lotteries);
}

export default { GetAllLotteries }