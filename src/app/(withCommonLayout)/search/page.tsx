'use client';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import Sidebar from '@/components/pages/search/Sidebar';
import DataTable from '@/components/pages/search/DataTable';
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
                        collapsed={collapsed}
                        onCollapse={toggleSidebar}
                        width={300} // Full width of the sidebar when expanded
                        collapsedWidth={60} // Width of the sidebar when collapsed
                  >
                        <div className="p-4">
                              <div className="flex justify-end">
                                    <button onClick={toggleSidebar} className="mb-4 border border-[#BABABA] rounded-full">
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
