import { Request, Response } from "express";
import UserService from "../service/UserService";

async function GetAllLotteries(req: Request, res: Response) {
    const Lotteries:any = await UserService.GetAllLotteries();
    console.log(Lotteries);
    const results = Lotteries
    res.json(results)
}

export default { GetAllLotteries }