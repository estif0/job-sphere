import express from "express";
import {
    createJob,
    getJobs,
    getJobById,
    updateJobById,
    deleteJobById,
} from "../controllers/JobController";
import { handleValidationErrors, validateJob } from "../middleware/validator";
import { protect } from "../middleware/authenticate.middleware";
const jobRouter = express.Router();

jobRouter.get("/", getJobs);
jobRouter.get("/:id", protect, getJobById);
jobRouter.post("/new", validateJob, handleValidationErrors, protect, createJob);
jobRouter.patch(
    "/update/:id",
    validateJob,
    handleValidationErrors,
    protect,
    updateJobById
);
jobRouter.delete("/delete/:id", protect, deleteJobById);
export default jobRouter;
