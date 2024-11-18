import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse } from '@/types';
export interface TBlog {
      _id: string;
      subject: string;
      image: string;
      category: string;
      url: string;
      details: string;
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
}

export interface TPrivacyPolicy {
      _id: string;
      content: string;
}

const contentApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getBlogs: build.query({
                  query: () => ({ url: '/blogs', method: 'GET' }),
                  transformResponse: (response: TApiResponse<TBlog[]>) => response.data,
            }),
            getFaqs: build.query({
                  query: () => ({ url: '/faqs', method: 'GET' }),
                  transformResponse: (response: TApiResponse<TFaq[]>) => response.data,
            }),
            getTerms: build.query({
                  query: () => ({ url: '/terms', method: 'GET' }),
                  transformResponse: (response: TApiResponse<TPrivacyPolicy>) => response.data,
            }),
            getPrivacy: build.query({
                  query: () => ({ url: '/privacy', method: 'GET' }),
                  transformResponse: (response: TApiResponse<TPrivacyPolicy>) => response.data,
            }),
            getStories: build.query({
                  query: () => ({ url: '/story', method: 'GET' }),
                  transformResponse: (response: TApiResponse<any>) => response.data?.story,
            }),
      }),
});

export const { useGetBlogsQuery, useGetFaqsQuery, useGetTermsQuery, useGetPrivacyQuery, useGetStoriesQuery } = contentApi;
