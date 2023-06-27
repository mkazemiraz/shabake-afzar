import { IAxiosRTKQueryRequest, User } from "@constants/GlobalTypes";
import { appApi } from "./app";
import { setUser } from "@redux/GlobalSlice";

const authApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, IAxiosRTKQueryRequest>({
      query: ({ body }) => {
        return {
          url: "auth/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: body,
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser({ user: { ...data } }));
        } catch (error: unknown) {
          /* empty */
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
