import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API}/api/v1/`,
});

const baseQueryExtendended: BaseQueryFn = async (args, api, extraOptions) => {
  let res = await baseQuery(args, api, extraOptions);
  return res;
};

export const api = createApi({
  baseQuery: baseQueryExtendended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["todo"],
  endpoints: () => ({}),
});
