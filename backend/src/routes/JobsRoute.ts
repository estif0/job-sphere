import express from "express";
import {
    createJob,
    getJobs,
    getJobById,
    updateJobById,
} from "../controllers/JobController";

const jobRouter = express.Router();

jobRouter.post("/", createJob);
jobRouter.get("/", getJobs);
jobRouter.get("/:id", getJobById);
jobRouter.post("/update/:id", updateJobById);
export default jobRouter;
