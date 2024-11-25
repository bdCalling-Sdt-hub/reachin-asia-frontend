import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse, TQueryParams } from '@/types';
export interface TBlog {
      _id: string;
      subject: string;
      image: string;
      category: string;
      url: string;
      details: string;
      createdAt: string;
}
export interface TFaq {
      _id: string;
      question: string;
      answer: string;
}
export interface TStory {
      _id: string;
      subject: string;
      year: number;
      answer: string;
      image: string;
}

export interface TPrivacyPolicy {
      _id: string;
      content: string;
}

const contentApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getBlogs: build.query({
                  query: () => ({ url: '/blog', method: 'GET' }),
                  transformResponse: (response: any) => {
                        return { blogs: response.data.blogs, meta: response.data.meta };
                  },
            }),
            getSingleBlog: build.query({
                  query: (id) => ({ url: `/blog/${id}`, method: 'GET' }),
                  transformResponse: (response: TApiResponse<TBlog>) => {
                        return response.data;
                  },
            }),
            getFilteredBlogs: build.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((arg: TQueryParams) => {
                                    params.append(arg.name, arg.value as string);
                              });
                        }
                        return {
                              url: '/blog',
                              method: 'GET',
                              params,
                        };
                  },
                  transformResponse: (response: any) => {
                        return { blogs: response.data.blogs, meta: response.data.meta };
                  },
            }),
            getFaqs: build.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((arg: TQueryParams) => {
                                    params.append(arg.name, arg.value as string);
                              });
                        }
                        return { url: '/faq', method: 'GET', params };
                  },
                  transformResponse: (response: any) => {
                        return { faqs: response.data.faqs, meta: response.data.meta };
                  },
            }),
            getTerms: build.query({
                  query: () => ({ url: '/rule/terms-and-conditions', method: 'GET' }),
                  transformResponse: (response: TApiResponse<TPrivacyPolicy>) => response.data,
            }),
            getPrivacy: build.query({
                  query: () => ({ url: '/rule/privacy-policy', method: 'GET' }),
                  transformResponse: (response: TApiResponse<TPrivacyPolicy>) => response.data,
            }),
            getStories: build.query({
                  query: () => ({ url: '/story', method: 'GET' }),
                  transformResponse: (response: TApiResponse<any>) => response.data?.story,
            }),
            getSingleStory: build.query({
                  query: (id) => ({ url: `/story/${id}`, method: 'GET' }),
                  transformResponse: (response: TApiResponse<any>) => response.data,
            }),
      }),
});

export const {
      useGetBlogsQuery,
      useGetFaqsQuery,
      useGetTermsQuery,
      useGetPrivacyQuery,
      useGetStoriesQuery,
      useGetFilteredBlogsQuery,
      useGetSingleBlogQuery,
      useGetSingleStoryQuery,
} = contentApi;
