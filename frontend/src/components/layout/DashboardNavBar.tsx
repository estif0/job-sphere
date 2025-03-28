import Logo from "../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";

const DashboardNavBar = () => {
    return (
        <nav className="w-full px-3 md:px-36 py-3 flex flex-wrap justify-between items-center shadow shadow-gray-300">
            <Link to="/">
                <img src={Logo} className="h-12" alt="Logo" />
            </Link>
            <div className="nav-lists hidden lg:flex justify-between items-center space-x-10 md:space-x-6">
                <a
                    href="#"
                    className="focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Job Search
                </a>
                <a
                    href="#"
                    className="focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    My Applications
                </a>
                <a
                    href="#"
                    className="focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Companies
                </a>
                <a
                    href="#"
                    className="focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Contact Us
                </a>
            </div>
            <div className="nav-buttons flex justify-between items-center space-x-1 md:space-x-2">
                <Link
                    to="/post-job"
                    className="bg-blue-800 text-white px-8 md:px-10 h-10 rounded-lg flex items-center justify-center"
                >
                    Post Job
                </Link>
            </div>
        </nav>
    );
};

export default DashboardNavBar;
