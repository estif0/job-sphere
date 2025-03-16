import SI from "../assets/images/SignupIllust.svg";
import logo from "../assets/icons/Logo.svg";
import { User, LockKeyhole, Mail } from "lucide-react";
import SocialMediaIcons from "../components/common/SocialMediaIcons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/signupSchema";

const SignupPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: signupSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch(
                    "http://localhost:8080/api/users/signup",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                    }
                );

                if (!response.ok) {
                    throw new Error("Signup failed");
                }

                const data = await response.json();

                localStorage.setItem("token", data.token);
                window.location.href = "/dashboard";
            } catch (error) {
                console.error("Signup failed:", error);
            }
        },
    });

    return (
        <div className="h-screen w-screen flex">
            {/* Right Section */}
            <div className="md:w-1/2 w-full flex justify-center items-center">
                <form
                    className="flex flex-col items-center justify-center md:items-start space-y-6"
                    onSubmit={formik.handleSubmit}
                >
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src={logo}
                            alt="job sphere logo"
                            className="h-12"
                        />
                    </Link>

                    {/* Title */}
                    <h1 className="font-bold text-3xl">Create your account</h1>

                    {/* Input Fields */}
                    <div className="w-full flex flex-col space-y-2">
                        {/* First Name */}
                        <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                            <User strokeWidth={1} />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                        </div>
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-600">
                                {formik.errors.firstName}
                            </div>
                        ) : null}

                        {/* Last Name */}
                        <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                            <User strokeWidth={1} />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                        </div>
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-red-600">
                                {formik.errors.lastName}
                            </div>
                        ) : null}

                        {/* Email */}
                        <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                            <Mail strokeWidth={1} />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600">
                                {formik.errors.email}
                            </div>
                        ) : null}

                        {/* Password */}
                        <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                            <LockKeyhole strokeWidth={1} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-600">
                                {formik.errors.password}
                            </div>
                        ) : null}

                        {/* Confirm Password */}
                        <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                            <LockKeyhole strokeWidth={1} />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="focus:outline-none"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                        </div>
                        {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword ? (
                            <div className="text-red-600">
                                {formik.errors.confirmPassword}
                            </div>
                        ) : null}
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full bg-blue-700 text-white px-8 md:px-10 h-10 rounded-lg flex items-center justify-center"
                        type="submit"
                    >
                        Create Account
                    </button>

                    {/* Divider */}
                    <div className="flex items-center w-full">
                        <div className="border-b border-gray-500 flex-grow"></div>
                        <p className="mx-2 whitespace-nowrap">OR</p>
                        <div className="border-b border-gray-500 flex-grow"></div>
                    </div>

                    {/* Social Media Icons */}
                    <SocialMediaIcons />

                    {/* Login Link */}
                    <div>
                        <span className="font-bold">
                            Already have an account?
                        </span>{" "}
                        <Link
                            to="/login"
                            className="text-blue-800 hover:cursor-pointer"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>

            {/* Left Section */}
            <div className="hidden md:h-full md:w-1/2 bg-[#F2F2F2] md:flex justify-center items-center">
                <img
                    src={SI}
                    alt="Signup illustration"
                    className="w-3/5 h-3/5 max-w-full max-h-full"
                />
            </div>
        </div>
    );
};

export default SignupPage;
