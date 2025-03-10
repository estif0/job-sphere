import express from "express";
import { createJob, getJobs } from "../controllers/JobController";

const jobRouter = express.Router();

jobRouter.post("/", createJob);
jobRouter.get("/", getJobs);
export default jobRouter;
