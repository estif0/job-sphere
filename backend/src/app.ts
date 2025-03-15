import express from "express";
import dotenv from "dotenv";
import jobRouter from "./routes/JobsRoute";
import connectToDB from "./config/db";
import logger from "./middleware/logger";
import limiter from "./middleware/rateLimit";
import errorHandler from "./middleware/errorHandler";
import cors from "cors";
import userRouter from "./routes/UsersRoute";

dotenv.config();
connectToDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(limiter);
app.use(errorHandler);

app.use("/api/jobs", jobRouter);
app.use("/api/users", userRouter);

export default app;
