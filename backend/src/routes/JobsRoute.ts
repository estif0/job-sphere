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
jobRouter.post("/new", validateJob, handleValidationErrors, createJob);
jobRouter.patch(
    "/update/:id",
    validateJob,
    handleValidationErrors,
    updateJobById
);
jobRouter.delete("/delete/:id", deleteJobById);
export default jobRouter;
