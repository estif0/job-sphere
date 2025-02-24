import { Link } from "react-router-dom";
import companyLogo from "../assets/job-sphere-logo.png";

export const Navbar = () => {
    return (
        <nav className="w-full px-6 md:px-36 py-5 flex flex-wrap justify-between items-center shadow-lg shadow-gray-300">
            <img
                src={companyLogo}
                alt="Job Search Logo"
                className="w-32 h-12 md:w-40 md:h-16 bg-blue-800 p-2 rounded-lg"
            />
            <div className="nav-lists hidden md:flex justify-between items-center space-x-4 md:space-x-8">
                <a
                    href="#"
                    className="text-lg md:text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Job Search
                </a>
                <a
                    href="#"
                    className="text-lg md:text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    My Applications
                </a>
                <a
                    href="#"
                    className="text-lg md:text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Companies
                </a>
                <a
                    href="#"
                    className="text-lg md:text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Contact Us
                </a>
            </div>
            <div className="nav-buttons flex justify-between items-center space-x-2 md:space-x-4">
                <Link
                    to="/login"
                    className="bg-blue-800 text-white px-4 md:px-8 pt-2 h-10 rounded-lg"
                >
                    Login
                </Link>
                <Link
                    to="/sign-up"
                    className="px-4 md:px-8 pt-2 h-10 rounded-lg border-2 border-blue-800"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};
