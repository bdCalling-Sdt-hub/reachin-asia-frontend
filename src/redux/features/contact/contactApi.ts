import { baseApi } from '@/redux/base/baseApi';

const contactApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            createContact: build.mutation({
                  query: (data) => {
                        return {
                              url: '/contact',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useCreateContactMutation } = contactApi;
