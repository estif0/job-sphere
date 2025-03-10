import express from "express";
import { createJob, getJobs, getJobById } from "../controllers/JobController";

const jobRouter = express.Router();

jobRouter.post("/", createJob);
jobRouter.get("/", getJobs);
jobRouter.get("/:id", getJobById);

export default jobRouter;
