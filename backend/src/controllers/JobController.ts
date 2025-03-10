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
            isBookmarked,
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
            isBookmarked,
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
