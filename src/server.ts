
// server.ts//
require('dotenv').config()
import { Server } from "http";
import mongose from 'mongoose'
import app from "./app";
let server: Server;
const PORT = 5000

async function main() {
    try {

        await mongose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wc7vd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        server = app.listen(PORT, () => {
            console.log(`App is Lister Port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

main()