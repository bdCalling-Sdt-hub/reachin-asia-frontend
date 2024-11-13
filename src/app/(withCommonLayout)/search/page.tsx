'use client';
import { Button, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Sidebar from '@/components/pages/search/Sidebar';
import DataTable from '@/components/pages/search/DataTable';
import { FaChevronCircleRight } from 'react-icons/fa';
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from 'react-icons/bi';
import { LuChevronLeftCircle, LuChevronRightCircle } from 'react-icons/lu';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
const SearchPage = () => {
       const [collapsed, setCollapsed] = useState(false);

       const toggleSidebar = () => {
              setCollapsed(!collapsed);
       };
       return (
              <Layout
                     style={{
                            backgroundColor: '#F8F9FD',
                     }}
                     className="min-h-screen container my-10"
              >
                     {/* Sidebar */}
                     <Sider
                            style={{
                                   backgroundColor: 'white',
                                   padding: 0,
                                   margin: 0,
                            }}
                            // collapsible
                            collapsed={collapsed}
                            onCollapse={toggleSidebar}
                            width={280}
                     >
                            <div className="p-4">
                                   <div className="flex justify-end">
                                          <button
                                                 onClick={toggleSidebar}
                                                 className="mb-4 border border-[#BABABA] rounded-full"
                                                 //   icon={collapsed ? <BiSolidChevronRightCircle /> : <BiSolidChevronLeftCircle />}
                                          >
                                                 {collapsed ? <GoChevronRight size={24} /> : <GoChevronLeft size={24} />}
                                          </button>
                                   </div>
                                   {!collapsed && <Sidebar />}
                            </div>
                     </Sider>

                     {/* Main Content */}
                     <Layout
                            style={{
                                   backgroundColor: 'transparent',
                            }}
                     >
                            <div className="p-4">
                                   <DataTable />
                            </div>
                     </Layout>
              </Layout>
       );
};

export default SearchPage;
