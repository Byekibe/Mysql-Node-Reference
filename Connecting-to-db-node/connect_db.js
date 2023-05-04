import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();


// envrironment constsnts
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DATABASE;

const conn = mysql.createConnection({
    host: host,
    user: user,
    database: db,
    password: password,
});

conn.connect(err => {
    if (err) throw err;

    console.log("Hurray!! Connected!")
})