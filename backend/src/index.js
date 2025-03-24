import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";


//console.log("Loaded ENV variables:", process.env);

import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

// CORS settings to allow credentials (cookies)
app.use(cors({
    origin: "http://localhost:3000", // Change this to your frontend URL
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT,  ()=>{
    console.log("Server is running on Port: "+ PORT);
    connectDB()
})