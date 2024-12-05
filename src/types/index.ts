export type TApiResponse<T> = {
      success: string;
      message: string;
      data?: T;
      pagination?: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
      };
};

export type TQueryParams = {
      name: string;
      value: string | number;
};

export type TPersonal = {
    contact_name: string;
    title: string;
    address: string;
    email: string;
    hq_phone: string;
    line: string;
    mobile_number: string;
    website: string;
};

export type TDetails = {
    company_name: string;
    industry: string;
    total_employee: string;
    estimate_revenue: string;
    location: string;
    hq_location: string;
    overview: string;
};

export type TManagement = {
    open_contact: string;
    non_monger: string;
    monger: string;
    director_count: string;
    c_level: string;
};

export type TContact = {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin_profile: string;
    youtube_channel: string;
};

export type TPeople = {
    _id: string;
    personal: TPersonal;
    details: TDetails;
    management: TManagement;
    contact: TContact;
    createdAt?: string;
    updatedAt?: string;
};

export type TPeopleResponse = {
      people: TPeople[];
      meta: {
            page: number;
            total: number;
      };
};
