import React from "react";
import { X } from "lucide-react";
import { JobType } from "../../../types/type";
const SavedJob: React.FC<{ job: JobType }> = ({ job }) => {
    return (
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
    );
};

export default SavedJob;
