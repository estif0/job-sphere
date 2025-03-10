import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    logo: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    salary: {
        init: { type: Number, required: true },
        final: { type: Number, required: true },
    },
    description: { type: String, required: true },
    experience: { type: String, required: true },
    isBookmarked: { type: Boolean, required: true },
    applicantNumber: { type: Number, required: true },
});

export default mongoose.model("Job", jobSchema);
