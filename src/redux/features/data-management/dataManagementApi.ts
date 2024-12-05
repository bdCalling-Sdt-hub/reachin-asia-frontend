import { baseApi } from '@/redux/base/baseApi';
import { TQueryParams } from '@/types';
export type CompanyResponse = {
      success: boolean;
      message: string;
      data: {
            companies: Company[];
            meta: {
                  page: number;
                  total: number;
            };
      };
};
export type PeopleResponse = {
      success: boolean;
      message: string;
      data: {
            peoples: People[];
            meta: {
                  page: number;
                  total: number;
            };
      };
};

export type Company = {
      _id: string;
      companyName: string;
      website: string;
      phone: string;
      companyType: string;
      employeeTotal: string;
      sales: string;
      district: string;
      industry: string;
      dunsNumber: string;
      country: string;
      trade: string;
      facebook: string;
      twitter: string;
      address: string;
      headquarters: string;
      decisionHq: string;
      description: string;
      contact: string;
      title: string;
      corporateFamily: string;
      tier: string;
      parent: string;
      branch: string;
      city: string;
      state: string;
      region: string;

      createdAt: string;
};

export type People = {
      _id: string;
      name: string;
      location?: string;
      hqLocation?: string;
      designation?: string;
      companyName?: string;
      instagram?: string;
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      youtube?: string;
      totalEmployee?: string;
      revenue?: string;
      industry?: string;
      hqPhone?: string;
      lineNumber?: string;
      mobile?: string;
      email?: string;
      overview?: string;
      image?: string;
      openContact?: string;
      nonManager?: string;
      manager?: string;
      directorCount?: string;
      cLevel?: string;
      website?: string;

      createdAt?: string;
};

export const dataManagementApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            // Get all companies
            getAllCompanies: builder.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((arg: TQueryParams) => {
                                    params.append(arg.name, arg.value as string);
                              });
                        }
                        return {
                              url: '/company',
                              method: 'GET',
                              params,
                        };
                  },
                  providesTags: ['Data'],
                  transformResponse: (response: CompanyResponse) => {
                        return { companies: response.data.companies, meta: response.data.meta };
                  },
            }),

            // Get all people
            getAllPeople: builder.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((arg: TQueryParams) => {
                                    params.append(arg.name, arg.value as string);
                              });
                        }
                        return {
                              url: '/people',
                              method: 'GET',
                              params,
                        };
                  },
                  transformResponse: (response: PeopleResponse) => {
                        return { peoples: response.data.peoples, meta: response.data.meta };
                  },
                  providesTags: ['Data'],
            }),

            // Get single data
            getSingleData: builder.query({
                  query: (id) => ({
                        url: `/data/${id}`,
                        method: 'GET',
                  }),
                  providesTags: ['Data'],
            }),
      }),
});

export const { useGetAllCompaniesQuery, useGetAllPeopleQuery, useGetSingleDataQuery } = dataManagementApi;
