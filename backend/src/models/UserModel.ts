import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            required: true,
            enum: ["USER", "ADMIN"],
            default: "USER",
        },
        bookmarkedJobs: {
            type: Array,
            default: [],
        },
        appliedJobs: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);
export default mongoose.model("User", userSchema);
