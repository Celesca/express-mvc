import Lottery from "../../../model/Lottery";
import { LotteryRepository } from "../../../repository/LotteryRepository";

function GetAllLotteries() {
    const lotteries: Lottery[] = LotteryRepository.findAll();
    return lotteries;

}