import { useFormik } from "formik";
import { fetchWithAuth } from "../services/fetchWithAuth";
import {
    Briefcase,
    MapPin,
    DollarSign,
    FileText,
    Calendar,
    Building,
} from "lucide-react";

import { jobSchema } from "../schemas/jobSchema";

const PostJobPage = () => {
    const formik = useFormik({
        initialValues: {
            logo: "",
            title: "",
            company: "",
            location: "",
            duration: "",
            salaryMin: "",
            salaryMax: "",
            description: "",
            experience: "",
        },
        validationSchema: jobSchema,
        onSubmit: async (values) => {
            try {
                console.log("Posting job:", values);
                const response = await fetchWithAuth(
                    "http://localhost:8080/api/jobs/new",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                    }
                );

                if (!response.ok) {
                    throw new Error("Job posting failed");
                }

                window.location.href = "/dashboard";
            } catch (error) {
                console.error("Job posting failed:", error);
            }
        },
    });

    return (
        <div className="w-full flex justify-center items-center">
            <form
                className="flex flex-col items-center justify-center md:items-start space-y-6 w-full max-w-lg"
                onSubmit={formik.handleSubmit}
            >
                {/* Title */}
                <h1 className="font-bold text-3xl">Post a New Job</h1>

                {/* Input Fields */}
                <div className="w-full flex flex-col space-y-2">
                    {/* Logo URL */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <img
                            src={formik.values.logo}
                            alt="Company Logo"
                            className="h-6 w-6"
                        />
                        <input
                            type="text"
                            name="logo"
                            placeholder="Logo URL"
                            className="focus:outline-none w-full"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.logo}
                        />
                    </div>
                    {formik.touched.logo && formik.errors.logo ? (
                        <div className="text-red-600">{formik.errors.logo}</div>
                    ) : null}

                    {/* Job Title */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <Briefcase strokeWidth={1} />
                        <input
                            type="text"
                            name="title"
                            placeholder="Job Title"
                            className="focus:outline-none w-full"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                    </div>
                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-red-600">
                            {formik.errors.title}
                        </div>
                    ) : null}

                    {/* Company */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <Building strokeWidth={1} />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            className="focus:outline-none w-full"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.company}
                        />
                    </div>
                    {formik.touched.company && formik.errors.company ? (
                        <div className="text-red-600">
                            {formik.errors.company}
                        </div>
                    ) : null}

                    {/* Location */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <MapPin strokeWidth={1} />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="focus:outline-none w-full"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.location}
                        />
                    </div>
                    {formik.touched.location && formik.errors.location ? (
                        <div className="text-red-600">
                            {formik.errors.location}
                        </div>
                    ) : null}

                    {/* Duration */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <Calendar strokeWidth={1} />
                        <select
                            name="duration"
                            className="focus:outline-none w-full"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.duration}
                        >
                            <option value="" label="Select duration" />
                            <option value="Full-time" label="Full-time" />
                            <option value="Part-time" label="Part-time" />
                            <option value="Internship" label="Internship" />
                            <option value="Contract" label="Contract" />
                            <option value="Volunteer" label="Volunteer" />
                        </select>
                    </div>
                    {formik.touched.duration && formik.errors.duration ? (
                        <div className="text-red-600">
                            {formik.errors.duration}
                        </div>
                    ) : null}

                    {/* Salary */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <DollarSign strokeWidth={1} />
                        <input
                            type="text"
                            name="salaryMin"
                            placeholder="Min Salary"
                            className="focus:outline-none w-1/2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.salaryMin}
                        />
                        <input
                            type="text"
                            name="salaryMax"
                            placeholder="Max Salary"
                            className="focus:outline-none w-1/2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.salaryMax}
                        />
                    </div>
                    {formik.touched.salaryMin && formik.errors.salaryMin ? (
                        <div className="text-red-600">
                            {formik.errors.salaryMin}
                        </div>
                    ) : null}
                    {formik.touched.salaryMax && formik.errors.salaryMax ? (
                        <div className="text-red-600">
                            {formik.errors.salaryMax}
                        </div>
                    ) : null}

                    {/* Description */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <FileText strokeWidth={1} />
                        <textarea
                            name="description"
                            placeholder="Job Description"
                            className="focus:outline-none w-full"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                    </div>
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-600">
                            {formik.errors.description}
                        </div>
                    ) : null}

                    {/* Experience */}
                    <div className="flex py-2 px-4 border-1 border-gray-300 rounded-xl space-x-2 w-full">
                        <FileText strokeWidth={1} />
                        <input
                            type="text"
                            name="experience"
                            placeholder="2 Year"
                            className="focus:outline-none w-full"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.experience}
                        />
                    </div>
                    {formik.touched.experience && formik.errors.experience ? (
                        <div className="text-red-600">
                            {formik.errors.experience}
                        </div>
                    ) : null}
                </div>

                {/* Submit Button */}
                <button
                    className="w-full bg-blue-700 text-white px-8 md:px-10 h-10 rounded-lg flex items-center justify-center"
                    type="submit"
                >
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default PostJobPage;
