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

export interface Company {
      _id: string;
      company_name: string;
      company_link: string;
      phone: string;
      company_type: string;
      employee_total: string;
      employees: string;
      sales: number;
      district: string;
      industry: string;
      country: string;
      twitter: string;
      facebook: string;
      instagram: string;
      linkedin: string;
      youtube: string;
      location: string;
      address: string;
      headquarters: string;
      decision_hq: string;
      corporate_linkage: string;
      business_description: string;
      contact: string;
      title: string;
      company_for_contact: string;
      corporate_family: string;
      tier: string;
      parent: string;
      corporate_company_name: string;
      corporate_decision_hq: string;
      corporate_headquarters: string;
      corporate_subsidary: string;

      total_staff: string;
      corporate_branch: string;
      corporate_is_decision_hq: string;
      corporate_is_headquarter: string;
      corporate_ownership_type: string;
      corporate_entity_type: string;
      corporate_city: string;
      corporate_state: string;
      corporate_country: string;
      employees_single: string;
      corporate_sales: string;
      corporate_hoovers_industry: string;
      corporate_key_id: string;
      corporate_duns_number: string;
      corporate_hoovers_contacts: string;
      corporate_direct_marketing_status: string;
      total_manager: string;
      total_c_level: string;
      total_open_contact: string;
      total_non_manager: string;
      image: string;
      __v: number;
      createdAt: string;
      updatedAt: string;
}

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
