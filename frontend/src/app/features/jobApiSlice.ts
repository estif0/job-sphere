import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApi = createApi({
    reducerPath: "jobApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: () => "api/jobs/",
        }),
        getJobById: builder.query({
            query: (id) => `api/jobs/${id}`,
        }),
        createJob: builder.mutation({
            query: (job) => ({
                url: "api/jobs/new",
                method: "POST",
                body: job,
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const { useGetAllJobsQuery, useGetJobByIdQuery, useCreateJobMutation } =
    jobApi;
export default jobApi;
