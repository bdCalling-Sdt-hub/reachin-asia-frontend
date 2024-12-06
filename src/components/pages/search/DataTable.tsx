'use client';
import { useGetAllCompaniesQuery, useGetAllPeopleQuery } from '@/redux/features/data-management/dataManagementApi';
import { Table, Button, Pagination } from 'antd';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSearchText, setSelectedCategory } from '@/redux/features/filter/filterSlice';
import { useSearchParams } from 'next/navigation';

// Define types for filter and table data
type FilterType = 'peoples' | 'companies' | null;

const DataTable: React.FC = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [activeFilter, setActiveFilter] = useState<FilterType>('peoples');
      const { searchText } = useAppSelector((state) => state.filter);
      const { data: peopleData, isLoading: isPeopleLoading } = useGetAllPeopleQuery([
            { name: 'page', value: currentPage },
            { name: 'limit', value: 10 },

            { name: 'search', value: searchText },
      ]);

      const { data: companiesData, isLoading: isCompaniesLoading } = useGetAllCompaniesQuery([
            {
                  name: 'page',
                  value: currentPage,
            },
            { name: 'limit', value: 10 },
            { name: 'search', value: searchText },
      ]);
      const dispatch = useAppDispatch();
      const searchParams = useSearchParams();

      useEffect(() => {
            const searchText = searchParams.get('searchText');
            const category = searchParams.get('category');

            if (searchText) dispatch(setSearchText(searchText));
            if (category) dispatch(setSelectedCategory(category));
      }, [searchParams, dispatch]);

      // Todo: need dynamic data

      // Query parameters

      const handleFilterClick = (filter: FilterType) => {
            setActiveFilter(filter === activeFilter ? null : filter);
            setCurrentPage(1);
      };

      const columns =
            activeFilter === 'peoples'
                  ? [
                          {
                                title: 'Contact Name',
                                dataIndex: 'name',
                                key: 'name',
                                render: (name: string, record: any, index: number) => (
                                      <div>
                                            <p className="font-semibold">{name}</p>
                                            <p>{record.companyName}</p>
                                      </div>
                                ),
                          },
                          {
                                title: 'Contact Information',
                                dataIndex: 'contactInfo',
                                key: 'contactInfo',
                                render: () => (
                                      <div className="flex gap-2">
                                            <span className="bg-primary text-white rounded-full px-2 py-1">HQ</span>
                                            <span className="bg-primary text-white rounded-full px-2 py-1">M</span>
                                            <span className="bg-primary text-white rounded-full px-2 py-1">D</span>
                                            <span className="bg-primary text-white rounded-full px-2 py-1">E</span>
                                      </div>
                                ),
                          },
                          {
                                title: 'Company Name',
                                dataIndex: 'companyName',
                                key: 'companyName',
                                render: (companyName: string) => <p className=" capitalize">{companyName}</p>,
                          },
                          {
                                title: 'Title',
                                dataIndex: 'designation',
                                key: 'designation',
                                render: (designation: string) => <p className=" capitalize">{designation}</p>,
                          },
                          {
                                title: 'Company Industry',
                                dataIndex: 'industry',
                                key: 'industry',
                                render: (industry: string) => <p className=" capitalize">{industry}</p>,
                          },
                          {
                                title: '',
                                key: 'details',
                                render: (record: any) => (
                                      <Button href={`/peoples/${record._id}`} shape="round" type="primary">
                                            Details
                                      </Button>
                                ),
                          },
                    ]
                  : [
                          {
                                title: 'Company Name',
                                dataIndex: 'companyName',
                                key: 'companyName',
                                render: (companyName: string, record: any) => (
                                      <div>
                                            <p>{companyName}</p>
                                            <p className="text-subtitle">{record.website}</p>
                                      </div>
                                ),
                          },
                          {
                                title: 'City/Country',
                                dataIndex: 'country',
                                key: 'country',
                          },
                          {
                                title: 'Primary Industry',
                                dataIndex: 'industry',
                                key: 'industry',
                          },
                          {
                                title: 'Employees',
                                dataIndex: 'employeeTotal',
                                key: 'employeeTotal',
                          },
                          {
                                title: 'Revenue (USA)',
                                dataIndex: 'sales',
                                key: 'sales',
                          },
                          {
                                title: '',
                                key: 'details',
                                render: (record: any) => (
                                      <Button href={`/companies/${record._id}`} shape="round" type="primary">
                                            Details
                                      </Button>
                                ),
                          },
                    ];

      // Get current data based on active filter
      const currentData = activeFilter === 'peoples' ? peopleData?.peoples : companiesData?.companies;
      const totalItems = activeFilter === 'peoples' ? peopleData?.meta?.total : companiesData?.meta?.total;
      const isLoading = activeFilter === 'peoples' ? isPeopleLoading : isCompaniesLoading;

      const handlePageChange = (page: number) => {
            setCurrentPage(page);
      };

      return (
            <div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 py-3">
                        {/* People Filter Button */}
                        <button
                              onClick={() => handleFilterClick('peoples')}
                              className={`${
                                    activeFilter === 'peoples' ? 'bg-primary text-white' : 'bg-[#F3F3F3] text-[#999999]'
                              } w-full sm:w-fit px-4 py-3 rounded-full text-sm font-medium`}
                        >
                              Peoples: {peopleData?.meta?.total || 0}
                        </button>

                        {/* Companies Filter Button */}
                        <button
                              onClick={() => handleFilterClick('companies')}
                              className={`${
                                    activeFilter === 'companies' ? 'bg-primary text-white' : 'bg-[#F3F3F3] text-[#999999]'
                              } w-full sm:w-fit px-4 py-3 rounded-full text-sm font-medium`}
                        >
                              Companies: {companiesData?.meta?.total || 0}
                        </button>
                  </div>

                  {/* Dynamic Table */}
                  <Table
                        scroll={{ x: 600 }}
                        columns={columns}
                        dataSource={currentData}
                        pagination={false}
                        loading={isLoading}
                        rowKey="id"
                  />

                  <div className="flex justify-center items-center my-4">
                        <Pagination
                              current={currentPage}
                              total={totalItems}
                              pageSize={10}
                              onChange={handlePageChange}
                              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                              className="w-full sm:w-auto text-xs sm:text-sm"
                              responsive
                        />
                  </div>
            </div>
      );
};

export default DataTable;
