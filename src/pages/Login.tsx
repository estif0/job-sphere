import LoginSVG from "../assets/login.svg";
import companyLogo from "../assets/job-sphere-logo.png";
const Login = () => {
    return (
        <div className="w-full flex h-screen">
            <img
                src={LoginSVG}
                alt="A Login SVG photo of generic illustration"
                className="h-full w-1/2 object-cover"
            />
            <div className="flex justify-center items-center h-full w-1/2 space-y-14">
                <div className="flex flex-col space-y-10">
                    <img
                        src={companyLogo}
                        alt="logo"
                        className="h-12 w-32 bg-blue-800 p-2 rounded-lg"
                    />
                    <h2>Login to your account</h2>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="border-2 border-slate-500 rounded-lg p-2 px-4"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="border-2 border-slate-500 rounded-lg p-2 px-4"
                    />
                    <button className="bg-blue-800 text-white px-8 h-10 rounded-lg w-full">
                        Login
                    </button>

                    <ul className="flex space-x-4">
                        <li>Google</li>
                        <li>Apple</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
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
            </div>
        </div>
    );
};

export default Login;
