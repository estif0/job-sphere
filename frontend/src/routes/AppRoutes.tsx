import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import PageNotFound from "../pages/PageNotFound";
import { useGetAllJobsQuery } from "../app/features/jobApiSlice";
import Dashboard from "../pages/Dashboard";
import PostJobPage from "../pages/PostJobPage";

const AppRoutes: React.FC = () => {
    const { data: jobList } = useGetAllJobsQuery({});

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                    path="/job/:id"
                    element={<JobDetailsPage jobList={jobList} />}
                />
                <Route path="/post-job" element={<PostJobPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
