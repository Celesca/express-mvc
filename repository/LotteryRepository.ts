import mysql from 'mysql2/promise';

export class LotteryRepository {
    private connection: any;

    constructor() {
        this.connection = mysql.createPool({
            host: 'localhost',

        } )
    }

    async findAll() {
        const [rows] = await this.connection.query('SELECT * FROM lottery');
        return rows;
    }
}
    