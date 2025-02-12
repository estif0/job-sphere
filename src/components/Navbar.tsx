import { Link } from "react-router-dom";
import companyLogo from "../assets/job-sphere-logo.png";

export const Navbar = () => {
    return (
        <nav className="w-full px-36 py-5 flex justify-between shadow-lg shadow-gray-300 shadow-b-lg">
            <img
                src={companyLogo}
                alt="Job Search Logo"
                className="w-40 h-16 bg-blue-800 p-2 rounded-lg"
            />
            <div className="nav-lists  flex justify-between items-center space-x-8">
                <a
                    href="#"
                    className="text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Job Search
                </a>
                <a
                    href="#"
                    className="text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    My Applications
                </a>
                <a
                    href="#"
                    className="text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Companies
                </a>
                <a
                    href="#"
                    className="text-xl focus:font-bold focus:text-blue-700 focus:underline focus:underline-offset-8"
                >
                    Contact Us
                </a>
            </div>
            <div className="nav-buttons flex justify-between items-center space-x-4">
                <Link
                    to="/login"
                    className="bg-blue-800 text-white px-8 pt-2 h-10 rounded-lg"
                >
                    Login
                </Link>
                <Link
                    to="/sign-up"
                    className="px-8 pt-2 h-10 rounded-lg border-2 border-blue-800"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};
