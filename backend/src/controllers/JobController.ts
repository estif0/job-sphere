import { Request, Response } from "express";
import Job from "../models/JobModel";
export const createJob = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            logo,
            title,
            company,
            location,
            duration,
            salary,
            description,
            experience,
        } = req.body;

        const job = Job.create({
            logo,
            title,
            company,
            location,
            duration,
            salary,
            description,
            experience,
            isBookmarked: false,
            applicantNumber: 0,
        });
        res.status(201).json({
            job: job,
            message: "Job has been created!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while creating the job.",
            details: error,
        });
    }
};

export const getJobs = async (_req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An error occurred while fetching jobs.",
            details: error,
        });
    }
};

export const getJobById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id = req.params.id;
        const job = await Job.findById(id);
        if (!job) {
            res.status(404).json({
                error: "Job doesn't exist!",
            });
            return;
        }
        res.status(200).json(job);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An error occurred while fetching the job!",
            details: error,
        });
    }
};

export const updateJobById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id = req.params.id;
        const {
            logo,
            title,
            company,
            location,
            duration,
            salary,
            description,
            experience,
        } = req.body;
        const job = await Job.findByIdAndUpdate(
            id,
            {
                logo,
                title,
                company,
                location,
                duration,
                salary,
                description,
                experience,
            },
            { new: true }
        );
        if (!job) {
            res.status(404).json({
                error: "Job doesn't exist!",
            });
            return;
        }
        res.status(200).json({
            job: job,
            message: "Job has been updated!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while updating the job.",
            details: error,
        });
    }
};

export const deleteJobById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id = req.params.id;
        const job = await Job.findByIdAndDelete(id);
        if (!job) {
            res.status(404).json({
                error: "Job doesn't exist!",
            });
            return;
        }
        res.status(200).json({
            message: "Job has been deleted!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while deleting the job.",
            details: error,
        });
    }
};
