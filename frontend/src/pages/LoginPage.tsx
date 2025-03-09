import SocialMediaIcons from "../components/common/SocialMediaIcons";
import logo from "../assets/icons/Logo.svg";
import LI from "../assets/images/LoginIllust.svg";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
        <div className="h-screen w-screen flex">
            <div className="hidden md:h-full  md:w-1/2 bg-[#F2F2F2] md:flex justify-center items-center">
                <img
                    src={LI}
                    alt="Login illustration"
                    className="w-3/5 h-3/5 max-w-full max-h-full"
                />
            </div>
            <div className="md:w-1/2 w-full flex justify-center items-center">
                <form
                    action=""
                    className="flex flex-col items-center justify-center md:items-start space-y-8"
                >
                    <Link to="/">
                        <img
                            src={logo}
                            alt="job sphere logo"
                            className="h-12"
                        />
                    </Link>
                    <h1 className="font-bold text-3xl">
                        Log in to your account
                    </h1>
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <Mail strokeWidth={1} />
                        <input
                            type="text"
                            placeholder="Email"
                            className="focus:outline-none"
                        />
                    </div>
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <LockKeyhole strokeWidth={1} />
                        <input
                            type="text"
                            placeholder="Password"
                            className="focus:outline-none"
                        />
                    </div>
                    <button className="w-full bg-blue-700 text-white px-8 md:px-10 h-10 rounded-lg flex items-center justify-center">
                        Login
                    </button>
                    <div className="flex items-center  w-full">
                        <div className="border-b border-gray-500 flex-grow"></div>
                        <p className="mx-2  whitespace-nowrap">OR</p>
                        <div className="border-b border-gray-500 flex-grow"></div>
                    </div>
                    <SocialMediaIcons />
                    <div>
                        <span className="font-bold">
                            Don't have an account?
                        </span>{" "}
                        <Link
                            to="/signup"
                            className="text-blue-800 hover:cursor-pointer"
                        >
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
