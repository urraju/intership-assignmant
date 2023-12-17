import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getcourse: build.query({
      query: () => "/course",
      onError: (error, queryArgs, api) => {
        console.log("error", error);
      },
      transformResponse: (rawResponse, queryArgs, api) => {
        return rawResponse;
      },
    }),
  }),
});

export const { useGetcourseQuery } = courseApi;
