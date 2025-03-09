import { Job } from "./Job";
import { JobType } from "../../../types/type";
interface FeedProps {
    jobList: JobType[];
}

export const Feed: React.FC<FeedProps> = ({ jobList }) => {
    return (
        <div className="w-full mx-auto">
            {jobList
                .filter((job) => !job.isBookmarked)
                .map((job) => (
                    <Job key={job.id} job={job} />
                ))}
        </div>
    );
};
