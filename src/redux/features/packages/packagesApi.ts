import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse, TQueryParams } from '@/types';
export interface TPackage {
      _id: string;
      title: string;
      description: string;
      price: number;
      duration: string;
      productId: string;
      credit: number;
      paymentLink: string;
      createdAt: string;
      paymentType: string;
}
export interface TMyPackage {
      _id: string;
      customerId: string;
      price: number;
      user: string;
      package: TPackage;
      trxId: string;
      subscriptionId: string;
      currentPeriodStart: string;
      currentPeriodEnd: string;
      remaining: number;
      status: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
}

const packagesApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getPackages: build.query({
                  query: (args) => {
                        const params = new URLSearchParams();
                        if (args) {
                              args.forEach((arg: TQueryParams) => {
                                    params.append(arg.name, arg.value as string);
                              });
                        }
                        return {
                              url: '/package',
                              method: 'GET',
                              params,
                        };
                  },
                  transformResponse: (response: TApiResponse<TPackage[]>) => response.data,
            }),
            getMyPackages: build.query({
                  query: () => {
                        return {
                              url: '/subscription/details',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<TMyPackage>) => response.data,
            }),
      }),
});

export const { useGetPackagesQuery, useGetMyPackagesQuery } = packagesApi;
