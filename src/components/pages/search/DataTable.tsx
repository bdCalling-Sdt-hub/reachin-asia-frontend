'use client';
// components/CompanyTable.js
import { Table, Button, Pagination } from 'antd';
import { useState } from 'react';

// Define types for filter and table data
type FilterType = 'peoples' | 'companies' | null;

const DataTable: React.FC = () => {
       const [activeFilter, setActiveFilter] = useState<FilterType>(null);

       const handleFilterClick = (filter: FilterType) => {
              setActiveFilter(filter === activeFilter ? null : filter);
       };

       // Define table columns based on active filter
       const columns =
              activeFilter === 'peoples'
                     ? [
                              {
                                     title: 'Contact Name',
                                     dataIndex: 'contactName',
                                     key: 'contactName',
                                     render: (contactName: string) => (
                                            <div>
                                                   <p>{contactName}</p>
                                                   <p className="text-subtitle"> Hongkong China</p>
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
                              },
                              {
                                     title: 'Title',
                                     dataIndex: 'title',
                                     key: 'title',
                              },
                              {
                                     title: 'Company Industry',
                                     dataIndex: 'industry',
                                     key: 'industry',
                              },
                              {
                                     title: '',
                                     key: 'details',
                                     render: () => (
                                            <Button href={`/details/${1}`} shape="round" type="primary">
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
                                     render: (companyName: string) => (
                                            <div>
                                                   <p>{companyName}</p>
                                                   <p className="text-subtitle">amazon.com</p>
                                            </div>
                                     ),
                              },

                              {
                                     title: 'City/Country',
                                     dataIndex: 'location',
                                     key: 'location',
                              },
                              {
                                     title: 'Primary Industry',
                                     dataIndex: 'industry',
                                     key: 'industry',
                              },
                              {
                                     title: 'Employees',
                                     dataIndex: 'employees',
                                     key: 'employees',
                              },
                              {
                                     title: 'Revenue (USA)',
                                     dataIndex: 'revenue',
                                     key: 'revenue',
                              },
                              {
                                     title: '',
                                     key: 'details',
                                     render: () => (
                                            <Button href={`/details/${1}`} shape="round" type="primary">
                                                   Details
                                            </Button>
                                     ),
                              },
                       ];

       // Define sample data based on active filter
       const data =
              activeFilter === 'peoples'
                     ? Array(10).fill({
                              key: '1',
                              contactName: 'Jack MA',
                              contactInfo: ['HQ', 'M', 'D', 'E'],
                              companyName: 'Reaching Asia Limited',
                              title: 'Chief Sales Officer',
                              industry: 'Business Services',
                       })
                     : Array(10).fill({
                              key: '1',
                              companyName: 'Amazon Inc',
                              location: 'New York City, USA',
                              industry: 'E-Commerce',
                              employees: '20,000+',
                              revenue: '$234',
                       });

       return (
              <div>
                     <div className="flex items-center gap-3 py-3">
                            {/* People Filter Button */}
                            <button
                                   onClick={() => handleFilterClick('peoples')}
                                   className={`${
                                          activeFilter === 'peoples' ? 'bg-primary text-white' : 'bg-[#F3F3F3] text-[#999999]'
                                   } w-fit px-4 py-3 rounded-full text-sm font-medium`}
                            >
                                   Peoples: 56,00
                            </button>

                            {/* Companies Filter Button */}
                            <button
                                   onClick={() => handleFilterClick('companies')}
                                   className={`${
                                          activeFilter === 'companies' ? 'bg-primary text-white' : 'bg-[#F3F3F3] text-[#999999]'
                                   } w-fit px-4 py-3 rounded-full text-sm font-medium`}
                            >
                                   Companies: 800
                            </button>
                     </div>

                     {/* Dynamic Table */}
                     <Table columns={columns} dataSource={data} pagination={false} />

                     <div className="flex justify-center items-center my-4">
                            <Pagination
                                   defaultCurrent={1}
                                   total={500}
                                   pageSize={10} // Number of items per page
                                   showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            />
                     </div>
              </div>
       );
};

export default DataTable;
