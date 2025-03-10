import express from "express";
import {
    createJob,
    getJobs,
    getJobById,
    updateJobById,
    deleteJobById,
} from "../controllers/JobController";

const jobRouter = express.Router();

jobRouter.get("/", getJobs);
jobRouter.get("/:id", getJobById);
jobRouter.post("/", createJob);
jobRouter.put("/update/:id", updateJobById);
jobRouter.delete("/delete/:id", deleteJobById);
export default jobRouter;
