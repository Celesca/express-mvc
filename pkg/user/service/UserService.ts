import Lottery from "../../../model/Lottery";
import { LotteryRepository } from "../../../repository/LotteryRepository";

function GetAllLotteries() {
    const lotteryRepository = new LotteryRepository();
    const lotteries = lotteryRepository.findAll();
    return lotteries;

}

export default { GetAllLotteries }