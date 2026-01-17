import express, { Request, Response } from 'express'
import cors from 'cors'
import "dotenv/config"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/test", async (req: Request, res: Response) => {
     res.json({
        message: "Server is running Smoothly"
    });
});

app.listen(8080,()=>{
    console.log("Server is listening ")
});