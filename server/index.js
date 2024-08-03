
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from './app.js'
import setupSocket from "./socket.js";
dotenv.config({
    path: './.env'
})




connectDB()
    .then(() => {
        const server = app.listen(process.env.PORT, () => {
            console.log(`Server is running at http://localhost:${process.env.PORT}`);
        });
        setupSocket(server);
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })


