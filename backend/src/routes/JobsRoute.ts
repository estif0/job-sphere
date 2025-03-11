import express from "express";
import {
    createJob,
    getJobs,
    getJobById,
    updateJobById,
    deleteJobById,
} from "../controllers/JobController";
import { handleValidationErrors, validateJob } from "../middleware/validator";

const jobRouter = express.Router();

jobRouter.get("/", getJobs);
jobRouter.get("/:id", getJobById);
jobRouter.post("/", validateJob, handleValidationErrors, createJob);
jobRouter.put(
    "/update/:id",
    validateJob,
    handleValidationErrors,
    updateJobById
);
jobRouter.delete("/delete/:id", deleteJobById);
export default jobRouter;
