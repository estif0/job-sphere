import { Job } from "./Job";
import jobData from "../constants/Jobs.json";
export const Feed = () => {
    return (
        <div className="w-[522px] mx-auto mt-10">
            {jobData
                .filter((job) => !job.isBookmarked)
                .map((job) => (
                    <Job key={job.id} job={job} />
                ))}
        </div>
    );
};
