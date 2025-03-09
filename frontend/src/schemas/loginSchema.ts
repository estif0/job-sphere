import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email format"
        )
        .required("Email is required"),

    password: Yup.string()
        .trim()
        .min(8, "Password must be at least 8 characters long")
        .max(72, "Password cannot exceed 72 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            `Password must contain at least: one uppercase letter, one lowercase letter, one number, and one special character`
        )
        .required("Password is required"),
});
