import React from "react";
import { JobType } from "../../../types/type";
import { X } from "lucide-react";

interface RelatedJobsType {
    jobList: JobType[];
}

const RelatedJobs: React.FC<RelatedJobsType> = ({ jobList }) => {
    return (
        <div className="w-full border-1 border-gray-300 shadow-xl rounded-lg px-4 py-2">
            <h2 className="text-center text-lg">Related Jobs</h2>
            <div className="flex flex-col space-y-2">
                {jobList
                    .filter((job) => !job.isBookmarked)
                    .slice(0, 4)
                    .map((job) => (
                        <div
                            className="p-4 flex flex-col bg-white shadow-lg rounded-lg border-1 border-gray-100"
                            key={job._id}
                        >
                            <div className="flex justify-between">
                                <h3 className="font-bold">{job.title}</h3>
                                <button className="focus:outline-none">
                                    <X strokeWidth={1} />
                                </button>
                            </div>
                            <p className="text-sm">{job.company}</p>
                            <div className="flex space-x-3 font-extralight mt-2">
                                <p className="bg-gray-200 p-0.5 px-2 rounded-lg text-xs">
                                    {job.location}
                                </p>

                                <p className="bg-gray-200 p-0.5 px-2 rounded-lg text-xs">
                                    ${job.salary.init} - ${job.salary.final}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default RelatedJobs;
