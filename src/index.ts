import express, { Request, Response } from 'express'
import cors from 'cors'
import "dotenv/config"
import { connectDB } from './config/db';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/test", async (req: Request, res: Response) => {
     res.json({
        message: "Server is running Smoothly"
    });
});

const runServer = () => {
    connectDB();
    app.listen(process.env.PORT,()=>{
        console.log("Server is started")
    })
}

runServer();