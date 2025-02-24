import { useState } from "react";
import { X } from "lucide-react";
import jobData from "../constants/Jobs.json";

export const SavedJobs = () => {
    const [jobs, setJobs] = useState(jobData);

    const handleRemoveBookmark = (id: number) => {
        setJobs((prevJobs) =>
            prevJobs.map((job) =>
                job.id === id ? { ...job, isBookmarked: false } : job
            )
        );
    };

    return (
        <div className="max-w-3xs mx-auto mt-10">
            <h2 className="text-center font-bold text-lg">Saved Jobs</h2>
            <div className="flex flex-col space-y-2">
                {jobs
                    .filter((job) => job.isBookmarked)
                    .map((job) => (
                        <div
                            className="p-4 flex flex-col bg-white shadow-lg rounded-lg border-1 border-gray-100"
                            key={job.id}
                        >
                            <div className="flex justify-between">
                                <h3 className="font-bold">{job.title}</h3>
                                <button
                                    className="focus:outline-none"
                                    onClick={() => handleRemoveBookmark(job.id)}
                                >
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
