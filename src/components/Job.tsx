import { FC } from "react";
import { Job as JobType } from "../types/type";
import { Bookmark } from "lucide-react";
import { Share2 } from "lucide-react";

interface JobProps {
    job: JobType;
}

export const Job: FC<JobProps> = ({ job }) => {
    return (
        // background of the job card
        <div className="mb-6 flex flex-col p-4 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center">
                <img src={job.logo} alt="" className="h-20" />

                <div>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                    <div>
                        <p>{job.location}</p>
                        <p>{job.duration}</p>
                        <p>
                            {job.salary.init} - {job.salary.final}
                        </p>
                    </div>
                </div>
                <div>
                    <Bookmark />
                    <Share2 />
                </div>
            </div>
            <div>{job.description}</div>
        </div>
    );
};
