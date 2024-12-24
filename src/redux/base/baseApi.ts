import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/redux/store';
import { logoutUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
      baseUrl: 'http://178.16.138.188:5000/api/v1',
      // credentials: 'include',
      prepareHeaders: (headers, { getState, endpoint }) => {
            const { token } = (getState() as RootState).auth;
            if (token) {
                  if (endpoint === 'getSingleCompany') {
                        headers.set('Authorization', token);
                  } else {
                        headers.set('Authorization', `Bearer ${token}`);
                  }
            }
      },
});
const baseQueryWithRefreshToken: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
      args,
      api,
      extraOptions
) => {
      let result = await baseQuery(args, api, extraOptions);

      if (result?.error?.status === 401) {
            api.dispatch(logoutUser());
      }
      return result;
};
export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: baseQueryWithRefreshToken,
      endpoints: () => ({}),
      tagTypes: ['Auth', 'User', 'Data'],
});

export const imageUrl = 'http://178.16.138.188:5000';
