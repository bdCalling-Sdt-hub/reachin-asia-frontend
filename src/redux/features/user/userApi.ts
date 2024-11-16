import { baseApi } from '@/redux/base/baseApi';

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
      }),
});

export const { useCreateUserMutation } = userApi;
