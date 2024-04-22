import mysql from "mysql2/promise";
export async function connectToDatabase() {
    const connection = await mysql.createConnection({
        host: process.env.NEXT_PUBLIC_HOST,
        port: process.env.NEXT_PUBLIC_PORT,
        user: process.env.NEXT_PUBLIC_USER,
        password: process.env.NEXT_PUBLIC_PASS,
        database: process.env.NEXT_PUBLIC_DATABASE
    });
    return connection;
}