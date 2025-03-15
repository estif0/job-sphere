import { FC } from "react";
import { JobType } from "../../../types/type";
import { Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface JobProps {
    job: JobType;
}

export const Job: FC<JobProps> = ({ job }) => {
    return (
        <div className="w-full mb-6 flex space-x-3 p-4 bg-white shadow-lg rounded-lg border-1 border-gray-100">
            <img src={job.logo} alt="" className="h-10 mb-2" />
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                    <div className="mb-2">
                        <Link to={`/job/${job._id}`}>
                            <h2 className="font-bold text-2xl mb-2">
                                {job.title}
                            </h2>
                        </Link>
                        <p className="mb-2">{job.company}</p>
                        <div className="flex space-x-3 font-extralight">
                            <p className="bg-gray-200 p-0.5 px-2 rounded-lg">
                                {job.location}
                            </p>
                            <p className="bg-gray-200 p-0.5 px-2 rounded-lg">
                                {job.duration}
                            </p>
                            <p className="bg-gray-200 p-0.5 px-2 rounded-lg">
                                ${job.salary.init} - ${job.salary.final}
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Bookmark strokeWidth={1.5} />
                        <Share2 strokeWidth={1.5} />
                    </div>
                </div>
                <div className="line-clamp-4">{job.description}</div>
            </div>
        </div>
    );
};
