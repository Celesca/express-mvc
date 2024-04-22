"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LotteryRepository_1 = require("../../../repository/LotteryRepository");
function GetAllLotteries() {
    const lotteryRepository = new LotteryRepository_1.LotteryRepository();
    const lotteries = lotteryRepository.findAll();
    return lotteries;
}
exports.default = { GetAllLotteries };
