import * as Yup from "yup";

export const jobSchema = Yup.object().shape({
    logo: Yup.string()
        .url("Logo must be a valid URL")
        .required("Logo is required"),

    title: Yup.string()
        .min(5, "Title must be at least 5 characters long")
        .max(100, "Title cannot exceed 100 characters")
        .required("Title is required"),

    company: Yup.string()
        .min(2, "Company name must be at least 2 characters long")
        .max(100, "Company name cannot exceed 100 characters")
        .required("Company is required"),

    location: Yup.string()
        .min(2, "Location must be at least 2 characters long")
        .max(100, "Location cannot exceed 100 characters")
        .required("Location is required"),

    duration: Yup.string()
        .oneOf(
            ["Full-time", "Part-time", "Internship", "Contract", "Volunteer"],
            "Duration must be one of the following: Full-time, Part-time, Internship, Contract, Volunteer"
        )
        .required("Duration is required"),

    salaryMin: Yup.string()
        .matches(
            /^\$?\d+(,\d{3})*(\.\d{2})?$/,
            "Salary must be a valid format (e.g., '$50000' or '50000')"
        )
        .required("Salary is required"),
    salaryMax: Yup.string()
        .matches(
            /^\$?\d+(,\d{3})*(\.\d{2})?$/,
            "Salary must be a valid format (e.g., '$50000' or '50000')"
        )
        .required("Salary is required"),

    description: Yup.string()
        .min(10, "Description must be at least 10 characters long")
        .max(1000, "Description cannot exceed 1000 characters")
        .required("Description is required"),

    experience: Yup.string()
        .min(2, "Experience must be at least 2 characters long")
        .max(100, "Experience cannot exceed 100 characters")
        .required("Experience is required"),
});
