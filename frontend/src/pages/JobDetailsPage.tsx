import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import RelatedJobs from "../components/pages/JobDetails/RelatedJobs";
import { JobType } from "../types/type";

import { Bookmark, Search, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface DetailsPageProps {
    jobList: JobType[];
}

const JobDetailsPage: React.FC<DetailsPageProps> = ({ jobList }) => {
    const { id } = useParams<{ id: string }>();

    const job = jobList.find((job) => job._id === id);

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <>
            <NavBar />
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-10">
                <div className="col-span-1"></div>
                <div className="col-span-6">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-blue-500">
                            &lt; Back
                        </Link>
                        <div className="flex w-1/2 justify-end">
                            <form className="my-4 w-full mx-auto rounded-full h-10 relative ">
                                <input
                                    type="text"
                                    className="w-full h-full text-gray-500 text-xs tracking-wide outline-none border border-gray-400/50 rounded-2xl px-8"
                                    placeholder="Job title, Keywords, or Company name | Location"
                                />
                                <Search className="size-4 absolute top-1/2 transform -translate-y-1/2 text-gray-800 left-3" />
                                <button className="bg-blue-700 text-white text-sm px-3 py-1 absolute top-1/2 transform -translate-y-1/2 right-2 rounded-lg cursor-pointer">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-span-3"></div>
            </div>
            <main className="mt-8 grid grid-cols-1 lg:grid-cols-10">
                <div className="col-span-1"></div>
                <div className="details col-span-6 shadow-xl rounded-xl border-gray-300 px-4 py-2">
                    <div className="w-full h-full flex justify-center">
                        <div className="w-full self-start md:w-[85%] lg:w-[75%] 2xl:[65%] h-full flex flex-col gap-4 items-start py-5">
                            {/* 
              // NOTE: THE UPPER PART
               */}
                            <div className="w-full  flex justify-between items-center gap-4 px-5 py-3">
                                <div className="flex items-center gap-8">
                                    <img
                                        className="w-16"
                                        src={job.logo}
                                        alt="logo"
                                    />
                                    <div className="flex flex-col items-start gap-1">
                                        <h2 className="text-xl lg:text-2xl text-gray-800 font-bold tracking-[1px]">
                                            {job.title}
                                        </h2>

                                        <span className="text-base lg:text-xl font-bold tracking-[1px] text-gray-800">
                                            {job.company}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5 items-end">
                                    <div className="flex gap-4 items-center">
                                        <button className="text-gray-800 cursor-pointer">
                                            <Bookmark className="size-6" />
                                        </button>
                                        <button className="text-gray-800 cursor-pointer">
                                            <Share2 className="size-6" />
                                        </button>
                                    </div>

                                    <button
                                        className="text-base lg:text-xl font-extrabold tracking-[1px] bg-[#0034D1] px-3 py-1 text-gray-100 
                  rounded-lg cursor-pointer"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            {/* 
              // NOTE: THE BOTTOM PART
               */}
                            <div className="w-full flex gap-10 px-5 py-3">
                                {/* LEFT SIDE OF THE DETAIL PAGE */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-base lg:text-xl font-bold text-gray-900">
                                            Job Type :
                                        </span>
                                        <span className="text-xs lg:text-base  text-gray-600">
                                            {job.duration || "Full Time"}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-base lg:text-xl font-bold text-gray-900">
                                            Location:
                                        </span>
                                        <span className="text-xs lg:text-base  text-gray-600">
                                            {job.location || "london"}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-base lg:text-xl font-bold text-gray-900">
                                            Experience:
                                        </span>
                                        <span className="text-xs lg:text-base  text-gray-600">
                                            {job.experience || "Entry Level"}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-base lg:text-xl font-bold text-gray-900">
                                            Number of Applicants:
                                        </span>
                                        <span className="text-xs lg:text-base  text-gray-600">
                                            40
                                        </span>
                                    </div>
                                </div>

                                {/* LEFT SIDE OF THE DETAIL PAGE */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-xl lg:text-2xl font-bold text-gray-900">
                                            Description
                                        </span>
                                        <span className="text-base lg:text-xl  text-gray-800">
                                            {job.description ||
                                                "No Description"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center col-span-3 px-12">
                    <RelatedJobs jobList={jobList} />
                </div>
            </main>
            <div className=""></div>
        </>
    );
};

export default JobDetailsPage;
