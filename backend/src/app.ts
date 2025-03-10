import express from "express";
import dotenv from "dotenv";

import jobRouter from "./routes/JobsRoute";
dotenv.config();
const app = express();
app.use("/api/jobs", jobRouter);
export default app;
