import mysql from 'mysql2/promise';

export class LotteryRepository {
    private connection: any;

    constructor() {
        this.connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            port: 3306,
            database: 'lottery_db',
        } )
    }

    async findAll() {
        const [rows] = await this.connection.query('SELECT * FROM lottery');
        console.log(rows)
        return rows;
    }
}