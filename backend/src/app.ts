import express from "express";
import dotenv from "dotenv";
import jobRouter from "./routes/JobsRoute";
import connectToDB from "./config/db";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());

app.use("/api/jobs", jobRouter);

export default app;
