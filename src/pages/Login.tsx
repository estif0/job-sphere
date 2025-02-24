/* eslint-disable @typescript-eslint/no-unused-vars */
import LoginSVG from "../assets/login.svg";
import companyLogo from "../assets/job-sphere-logo.png";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/schema";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema, // Use the login schema for validation
        onSubmit: (values) => {
            console.log("Form data submitted:", values);
            // Handle form submission (e.g., API call)
        },
    });
    return (
        <div className="w-full flex flex-col md:flex-row h-screen">
            <img
                src={LoginSVG}
                alt="A Login SVG photo of generic illustration"
                className="hidden md:block h-full w-1/2 object-cover"
            />
            <form
                className="flex justify-center items-center h-full w-full md:w-1/2 space-y-14"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-col space-y-10">
                    <img
                        src={companyLogo}
                        alt="logo"
                        className="h-12 w-32 bg-blue-800 p-2 rounded-lg"
                    />
                    <h2>Login to your account</h2>
                    <div className="">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="border-2 border-slate-500 rounded-lg p-2 px-4"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>

                    <div className="">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="border-2 border-slate-500 rounded-lg p-2 px-4"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-600 m-0 p-0">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-800 text-white px-8 h-10 rounded-lg w-full"
                    >
                        Login
                    </button>

                    <div>
                        <span>-------------------</span> or{" "}
                        <span>-------------------</span>
                    </div>

                    <ul className="flex justify-between">
                        <li>
                            <svg
                                width="42"
                                height="42"
                                className="p-2 border-2 border-slate-300 rounded-lg"
                                viewBox="0 0 48 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_26_11451)">
                                    <path
                                        d="M47.532 24.8377C47.532 23.2062 47.3997 21.5659 47.1175 19.9609H24.48V29.2029H37.4434C36.9055 32.1836 35.177 34.8204 32.6461 36.4959V42.4926H40.3801C44.9217 38.3126 47.532 32.1395 47.532 24.8377Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M24.4802 48.2866C30.9531 48.2866 36.4119 46.1613 40.3891 42.4927L32.6551 36.496C30.5034 37.9599 27.7255 38.7889 24.489 38.7889C18.2278 38.7889 12.9189 34.5647 11.0141 28.8855H3.0332V35.0674C7.10743 43.1717 15.4058 48.2866 24.4802 48.2866Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M11.0051 28.8856C9.99973 25.9049 9.99973 22.6772 11.0051 19.6965V13.5146H3.03298C-0.371021 20.2962 -0.371021 28.2859 3.03298 35.0675L11.0051 28.8856Z"
                                        fill="#FBBC04"
                                    />
                                    <path
                                        d="M24.4802 9.78423C27.9018 9.73132 31.2088 11.0188 33.6869 13.3822L40.539 6.53015C36.2002 2.45592 30.4416 0.21598 24.4802 0.286529C15.4058 0.286529 7.10743 5.40136 3.0332 13.5145L11.0053 19.6964C12.9013 14.0084 18.2189 9.78423 24.4802 9.78423Z"
                                        fill="#EA4335"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26_11451">
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="white"
                                            transform="translate(0 0.284912)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li>
                            <svg
                                width="42"
                                height="42"
                                className="p-2 border-2 border-slate-300 rounded-lg"
                                viewBox="0 0 48 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_26_11436)">
                                    <path
                                        d="M43.5839 37.692C42.858 39.369 41.9988 40.9126 41.0033 42.3318C39.6463 44.2666 38.5352 45.6058 37.6789 46.3495C36.3516 47.5702 34.9294 48.1954 33.4065 48.2309C32.3132 48.2309 30.9947 47.9198 29.4599 47.2887C27.9201 46.6606 26.5051 46.3495 25.2112 46.3495C23.8542 46.3495 22.3988 46.6606 20.8421 47.2887C19.2831 47.9198 18.0271 48.2487 17.0668 48.2813C15.6064 48.3435 14.1508 47.7006 12.6978 46.3495C11.7704 45.5406 10.6105 44.154 9.22087 42.1896C7.72995 40.0919 6.50422 37.6594 5.54395 34.8861C4.51554 31.8907 4 28.99 4 26.1818C4 22.965 4.69509 20.1906 6.08734 17.8656C7.18153 15.9981 8.63718 14.525 10.4591 13.4435C12.2809 12.3621 14.2495 11.811 16.3694 11.7757C17.5293 11.7757 19.0505 12.1345 20.9408 12.8397C22.8258 13.5472 24.0361 13.906 24.5667 13.906C24.9635 13.906 26.308 13.4865 28.5874 12.6501C30.7428 11.8744 32.562 11.5532 34.0524 11.6797C38.0908 12.0056 41.1247 13.5976 43.1425 16.4657C39.5307 18.654 37.7441 21.7191 37.7797 25.6512C37.8123 28.7139 38.9233 31.2625 41.107 33.2862C42.0966 34.2254 43.2017 34.9513 44.4313 35.4669C44.1646 36.2402 43.8832 36.9809 43.5839 37.692ZM34.322 1.24567C34.322 3.64622 33.445 5.88761 31.6969 7.96221C29.5873 10.4285 27.0357 11.8537 24.2687 11.6288C24.2334 11.3408 24.213 11.0377 24.213 10.7192C24.213 8.41464 25.2162 5.94835 26.9978 3.93181C27.8872 2.91081 29.0185 2.06186 30.3903 1.38463C31.7591 0.717511 33.0539 0.348578 34.2716 0.2854C34.3072 0.606316 34.322 0.927252 34.322 1.24564V1.24567Z"
                                        fill="#0B0A0A"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26_11436">
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="white"
                                            transform="translate(0 0.284912)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li>
                            <svg
                                width="42"
                                height="42"
                                className="p-2 border-2 border-slate-300 rounded-lg"
                                viewBox="0 0 48 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_26_11442)">
                                    <path
                                        d="M48 24.2849C48 11.0301 37.2548 0.284912 24 0.284912C10.7452 0.284912 0 11.0301 0 24.2849C0 36.2638 8.77641 46.1929 20.25 47.9934V31.2224H14.1562V24.2849H20.25V18.9974C20.25 12.9824 23.8331 9.65991 29.3152 9.65991C31.9402 9.65991 34.6875 10.1287 34.6875 10.1287V16.0349H31.6613C28.68 16.0349 27.75 17.8851 27.75 19.7849V24.2849H34.4062L33.3422 31.2224H27.75V47.9934C39.2236 46.1929 48 36.2638 48 24.2849Z"
                                        fill="#1877F2"
                                    />
                                    <path
                                        d="M33.3422 31.2224L34.4062 24.2849H27.75V19.7849C27.75 17.8869 28.68 16.0349 31.6613 16.0349H34.6875V10.1287C34.6875 10.1287 31.9411 9.65991 29.3152 9.65991C23.8331 9.65991 20.25 12.9824 20.25 18.9974V24.2849H14.1562V31.2224H20.25V47.9934C22.7349 48.3821 25.2651 48.3821 27.75 47.9934V31.2224H33.3422Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26_11442">
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="white"
                                            transform="translate(0 0.284912)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li>
                            <svg
                                width="42"
                                height="42"
                                className="p-2 border-2 border-slate-300 rounded-lg"
                                viewBox="0 0 48 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_26_11461)">
                                    <path
                                        d="M44.4567 0.284912H3.54333C2.60358 0.284912 1.70232 0.658227 1.03782 1.32273C0.373315 1.98723 0 2.8885 0 3.82825V44.7416C0 45.6813 0.373315 46.5826 1.03782 47.2471C1.70232 47.9116 2.60358 48.2849 3.54333 48.2849H44.4567C45.3964 48.2849 46.2977 47.9116 46.9622 47.2471C47.6267 46.5826 48 45.6813 48 44.7416V3.82825C48 2.8885 47.6267 1.98723 46.9622 1.32273C46.2977 0.658227 45.3964 0.284912 44.4567 0.284912ZM14.3067 41.1749H7.09V18.2516H14.3067V41.1749ZM10.6933 15.0749C9.87473 15.0703 9.07583 14.8233 8.39747 14.3651C7.71911 13.9069 7.19168 13.258 6.88175 12.5003C6.57183 11.7426 6.4933 10.9101 6.65606 10.1078C6.81883 9.30555 7.2156 8.56947 7.79631 7.99248C8.37702 7.41548 9.11563 7.02345 9.91893 6.86583C10.7222 6.70822 11.5542 6.7921 12.3099 7.10688C13.0656 7.42167 13.7111 7.95325 14.1649 8.63454C14.6188 9.31583 14.8606 10.1163 14.86 10.9349C14.8677 11.483 14.765 12.027 14.558 12.5345C14.351 13.0421 14.044 13.5027 13.6551 13.889C13.2663 14.2754 12.8037 14.5795 12.2948 14.7832C11.786 14.9869 11.2413 15.0862 10.6933 15.0749ZM40.9067 41.1949H33.6933V28.6716C33.6933 24.9782 32.1233 23.8382 30.0967 23.8382C27.9567 23.8382 25.8567 25.4516 25.8567 28.7649V41.1949H18.64V18.2682H25.58V21.4449H25.6733C26.37 20.0349 28.81 17.6249 32.5333 17.6249C36.56 17.6249 40.91 20.0149 40.91 27.0149L40.9067 41.1949Z"
                                        fill="#0A66C2"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_26_11461">
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="white"
                                            transform="translate(0 0.284912)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                    </ul>
                    <div>
                        <span className="font-bold">
                            Don't have an account?
                        </span>{" "}
                        <span className="text-blue-800 hover:cursor-pointer">
                            Create account
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
