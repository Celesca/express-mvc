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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserRouter_1 = __importDefault(require("../router/UserRouter"));
const AdminRouter_1 = __importDefault(require("../router/AdminRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api/', UserRouter_1.default);
app.use('/api/admin', AdminRouter_1.default);
app.get('/testdb', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    promise_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'yourdb',
        port: 3306
    }).then((conn) => {
        conn.query('SELECT * FROM users')
            .then((results) => {
            res.json(results[0]);
        });
    })
        .catch((error) => {
        console.error('Error connecting to database: ', error);
        res.status(500).send('Error connecting to database');
    });
}));
app.get('/test-db-new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield promise_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'yourdb',
            port: 3306
        });
        const results = yield conn.query('SELECT * FROM users');
        res.json(results[0]);
    }
    catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).send('Error fetching users');
    }
}));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
