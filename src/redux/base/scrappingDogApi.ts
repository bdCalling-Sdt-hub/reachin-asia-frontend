import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface TScrapingDog {
      title: string;
      snippet: string;
      source: string;
      lastUpdated: string;
      url: string;
      imgSrc: string;
}

export const scrapingDogApi = createApi({
      reducerPath: 'scrapingDogApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'https://api.scrapingdog.com/google_news/' }),
      endpoints: (builder) => ({
            fetchGoogleResults: builder.query({
                  query: ({ query, results = 10, country = 'us', page = 0, advance_search = 'false' }) => ({
                        url: '',
                        params: {
                              api_key: '675c0a80a3e9033eb60e7424',
                              query,
                              results,
                              country,
                              page,
                              advance_search,
                        },
                  }),
                  transformResponse: (response: any) => response.news_results,
            }),
      }),
});

export const { useFetchGoogleResultsQuery } = scrapingDogApi;
