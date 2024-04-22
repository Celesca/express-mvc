"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotteryRepository = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
class LotteryRepository {
    constructor() {
        this.connection = promise_1.default.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            port: 3306,
            database: 'lottery_db',
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.query('SELECT * FROM lottery');
            console.log(rows);
            return rows;
        });
    }
}
exports.LotteryRepository = LotteryRepository;
