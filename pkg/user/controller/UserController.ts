import { Request, Response } from "express";

function GetAllLotteries(req: Request, res: Response) {
    const Lotteries: Lottery[] = 
    res.json({"message" : 'Get all lotteries'});
}

export default { GetAllLotteries }