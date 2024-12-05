import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/redux/store';

export const baseApi = createApi({
      reducerPath: 'baseApi',
      baseQuery: fetchBaseQuery({
            baseUrl: 'http://192.168.10.102:6001/api/v1',
            credentials: 'include',
            prepareHeaders: (header, { getState }) => {
                  const { token } = (getState() as RootState).auth;
                  if (token) {
                        header.set('Authorization', `Bearer ${token}`);
                  }
            },
      }),
      endpoints: () => ({}),
      tagTypes: ['Auth', 'User', 'Data'],
});

export const imageUrl = 'http://192.168.10.102:6001';
