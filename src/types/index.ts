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

export type TPeople = {
      _id: string;
      name: string;
      email?: string;
      phone?: string;
      company?: string;
      title?: string;
      // Add more fields as needed based on your actual data structure
};

export type TPeopleResponse = {
      people: TPeople[];
      meta: {
            page: number;
            total: number;
      };
};
