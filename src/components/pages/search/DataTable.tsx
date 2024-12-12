'use client';
import { People, useGetAllCompaniesQuery, useGetAllPeopleQuery } from '@/redux/features/data-management/dataManagementApi';
import { Table, Button, Pagination, Tooltip, message } from 'antd';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSearchText, setSelectedCategory } from '@/redux/features/filter/filterSlice';
import { useRouter, useSearchParams } from 'next/navigation';

// Define types for filter and table data
type FilterType = 'peoples' | 'companies' | null;

const DataTable: React.FC<{ activeFilter: FilterType; setActiveFilter: (filter: FilterType) => void }> = ({
      activeFilter,
      setActiveFilter,
}) => {
      const router = useRouter();
      const { user } = useAppSelector((state) => state.auth);
      const [currentPage, setCurrentPage] = useState(1);
      const {
            searchText,
            selectedFunction,
            selectedCategory,
            selectedRevenueRange,
            selectedManageLevel,
            selectedSource,
            selectedOwnership,
            selectedIndustry,
            selectedPrimaryIndustry,
            selectedSubIndustry,
            selectedRegion,
            selectedEmployeeTotal,
            selectedSales,
            selectedCompanyType,
            selectedEmployee,
            selectedSeniority,
            selectedAccuracyScore,
      } = useAppSelector((state) => state.filter);

      // Todo: This is people data filters
      const { data: peopleData, isLoading: isPeopleLoading } = useGetAllPeopleQuery([
            { name: 'page', value: currentPage },
            { name: 'limit', value: 10 },
            { name: 'search', value: searchText },
            { name: 'function', value: selectedFunction },
            { name: 'seniority', value: selectedSeniority },
            { name: 'country', value: selectedRegion },
            { name: 'industry', value: selectedPrimaryIndustry },
            { name: 'sub_industry', value: selectedSubIndustry },
            { name: 'employee_count', value: selectedEmployeeTotal },
            { name: 'accuracy_score', value: selectedAccuracyScore },
            { name: 'revenue_range', value: selectedRevenueRange },
            { name: 'source', value: selectedSource },
      ]);

      // Todo: This is companies data filters
      const { data: companiesData, isLoading: isCompaniesLoading } = useGetAllCompaniesQuery([
            {
                  name: 'page',
                  value: currentPage,
            },
            { name: 'limit', value: 10 },
            { name: 'search', value: searchText },
            { name: 'company_type', value: selectedCompanyType },
            { name: 'country', value: selectedRegion },
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

      const handleViewPeopleDetails = (id: string) => {
            if (!user) {
                  message.warning('Please log in to view people details.');
                  router.push('/login');
            } else {
                  router.push(`/peoples/${id}`);
            }
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
                                            <p className="font-semibold">
                                                  {record.first_name} {record.last_name}
                                            </p>
                                            <p className="text-subtitle">{record.company_name}</p>
                                      </div>
                                ),
                          },
                          {
                                title: 'Contact Information',
                                dataIndex: 'contactInfo',
                                key: 'contactInfo',
                                render: (contactInfo: string, record: People, index: number) => (
                                      <div className="flex gap-2">
                                            <Tooltip title={record.hq_phone}>
                                                  <span className="bg-primary text-white rounded-full px-2 py-1">HQ</span>
                                            </Tooltip>

                                            <Tooltip title={record.mobile}>
                                                  <span className="bg-primary text-white rounded-full px-2 py-1">M</span>
                                            </Tooltip>
                                            <Tooltip title={record.hq_location}>
                                                  <span className="bg-primary text-white rounded-full px-2 py-1">D</span>
                                            </Tooltip>
                                            <Tooltip title={record.email}>
                                                  <span className="bg-primary text-white rounded-full px-2 py-1">E</span>
                                            </Tooltip>
                                      </div>
                                ),
                          },
                          {
                                title: 'Company Name',
                                dataIndex: 'company_name',
                                key: 'company_name',
                                render: (company_name: string) => <p className=" capitalize">{company_name}</p>,
                          },
                          {
                                title: 'Title',
                                dataIndex: 'title',
                                key: 'title',
                                render: (title: string) => <p className=" capitalize">{title}</p>,
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
                                      <Button onClick={() => handleViewPeopleDetails(record._id)} shape="round" type="primary">
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
                                            <p className="font-semibold text-[17px]">{companyName}</p>
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

                        <button
                              onClick={() => handleFilterClick('companies')}
                              className={`${
                                    activeFilter === 'companies' ? 'bg-primary text-white' : 'bg-[#F3F3F3] text-[#999999]'
                              } w-full sm:w-fit px-4 py-3 rounded-full text-sm font-medium`}
                        >
                              Companies: {companiesData?.meta?.total || 0}
                        </button>
                  </div>

                  <Table
                        scroll={{ x: 600 }}
                        columns={columns}
                        dataSource={currentData as any}
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
