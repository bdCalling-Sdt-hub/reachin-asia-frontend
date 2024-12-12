import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse, TQueryParams } from '@/types';
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
      instagram?: string;
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      youtube?: string;
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

export interface People {
      _id: string;
      zoom_contact_info: string;
      company_name: string;
      first_name: string;
      last_name: string;
      salutation: string;
      suffix: string;
      middle_name: string;
      title: string;
      email: string;
      function: string;
      seniority: string;
      phone: string;
      mobile: string;
      hq_phone: string;
      linkedin: string;
      country: string;
      city: string;
      state: string;
      zip_code: string;
      zoom_company_id: string;
      attribute1: string;
      attribute2: string;
      supplement_email: string;
      industry: string;
      sub_industry: string;
      employee_count: string;
      source: string;
      accuracy_score: string;
      zoom_info_contact: string;
      website: string;
      revenue: string;
      revenue_range: string;
      zoom_info_company_profile: string;
      company_linkedin: string;
      company_facebook: string;
      company_twitter: string;
      company_instagram: string;
      company_youtube: string;

      ownership: string;
      business_model: string;
      company_country: string;
      company_city: string;
      image: string;
      hq_location: string;
      company_overview: string;
      open_contact: string;
      non_manager: string;
      manager: string;
      director: string;
      c_level: string;
      __v: number;
      createdAt: string;
      updatedAt: string;
}

export const dataManagementApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            // Get all companies
            getAllCompanies: builder.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((arg: TQueryParams) => {
                                    if (arg.value !== '') {
                                          params.append(arg.name, arg.value as string);
                                    }
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
                                    if (arg.value !== '' && arg.value != '0') {
                                          params.append(arg.name, arg.value as string);
                                    }
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
            getSingleCompany: builder.query({
                  query: (id) => ({ url: `/company/${id}`, method: 'GET' }),
                  providesTags: ['Data'],
                  transformResponse: (response: TApiResponse<Company>) => response.data,
            }),
            getSinglePeople: builder.query({
                  query: (id) => ({ url: `/people/${id}`, method: 'GET' }),
                  providesTags: ['Data'],
                  transformResponse: (response: TApiResponse<People>) => response.data,
            }),
      }),
});

export const { useGetAllCompaniesQuery, useGetAllPeopleQuery, useGetSingleCompanyQuery, useGetSinglePeopleQuery } =
      dataManagementApi;
