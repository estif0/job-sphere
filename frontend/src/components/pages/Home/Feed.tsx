import { useState } from "react";
import { Job } from "./Job";
import { JobType } from "../../../types/type";

interface FeedProps {
    jobList: JobType[];
}

export const Feed: React.FC<FeedProps> = ({ jobList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobList
        .filter((job) => !job.isBookmarked)
        .slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(jobList.length / jobsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="w-full mx-auto">
            {currentJobs.map((job) => (
                <Job key={job.id} job={job} />
            ))}
            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
