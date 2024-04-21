import Lottery from "../../../model/Lottery";

function GetAllLotteries() {
    const lotteries: Lottery[] = LotteryRepository.findAll();
    return lotteries;

}