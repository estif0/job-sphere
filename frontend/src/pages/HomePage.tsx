import NavBar from "../components/layout/NavBar";
import Bookmarked from "../components/pages/Home/Bookmarked";
import { Feed } from "../components/pages/Home/Feed";
import Filter from "../components/pages/Home/Filter";
import SearchBar from "../components/common/SearchBar";

import { useGetAllJobsQuery } from "../app/features/jobApiSlice";
import Loading from "./Loading";
import { Navigate } from "react-router-dom";

const HomePage = () => {
    const { data: jobList, isLoading, isError } = useGetAllJobsQuery({});
    if (isLoading) return <Loading />;
    if (isError) return <Navigate to="/*" />;
    return (
        <>
            <NavBar />
            <SearchBar />
            <div className="my-4 mx-12 grid grid-cols-1 lg:grid-cols-13 gap-x-10">
                <div className="col-span-4">
                    <Filter />
                </div>
                <div className="col-span-6">
                    <Feed jobList={jobList} />
                </div>
                <div className="col-span-3">
                    <Bookmarked jobList={jobList} />
                </div>
            </div>
        </>
    );
};

export default HomePage;
