import express from "express";
import dotenv from "dotenv";
import jobRouter from "./routes/JobsRoute";
import connectToDB from "./config/db";
import logger from "./middleware/logger";
import limiter from "./middleware/rateLimit";

dotenv.config();
connectToDB();

const app = express();

app.use(express.json());
app.use(logger);
app.use(limiter);

app.use("/api/jobs", jobRouter);

export default app;
