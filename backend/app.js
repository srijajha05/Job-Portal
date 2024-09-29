import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions= {
    origin:'http://localhost:5500',
    credentials:true
}
app.use(cors(corsOptions));

app.use("/api/v1/user",userRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`backend connected at port ${PORT}`);
});