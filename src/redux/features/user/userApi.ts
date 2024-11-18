import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse } from '@/types';
export interface TUser {
      _id: string;
      name: string;
      company: string;
      role: string;
      email: string;
      contact: string;
      website: string;
      linkedIn: string;
      isSubscribed: boolean;
      profile: string;
      verified: boolean;
      status: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
}

const userApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            createUser: build.mutation({
                  query: (data) => {
                        return {
                              url: '/user',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
            getProfile: build.query({
                  query: () => {
                        return {
                              url: '/user/profile',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TUser>) => response.data,
            }),
      }),
});

export const { useCreateUserMutation, useGetProfileQuery } = userApi;
