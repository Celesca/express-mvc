import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import bodyParser from "body-parser";
import userRouter from '../router/userRouter';
import adminRouter from '../router/adminRouter';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/', userRouter)
app.use('/api/admin', adminRouter)

app.get('/testdb', async (req: Request, res: Response) => {
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'yourdb',
        port: 3306
    }).then((conn) => {
        conn.query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        })
    })
    .catch((error) => {
        console.error('Error connecting to database: ', error)
        res.status(500).send('Error connecting to database')
    })
})

app.get('/test-db-new' , async(req: Request, res: Response) => {
    try {
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'yourdb',
            port: 3306
        })
    
        const results = await conn.query('SELECT * FROM users')
        res.json(results[0])

    } catch (error: any)
     {
        console.error('Error fetching users:' , error.message)
        res.status(500).send('Error fetching users')
    }

})

app.get("/", (req:Request, res:Response) => {
    res.send("Express + TypeScript Server");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})