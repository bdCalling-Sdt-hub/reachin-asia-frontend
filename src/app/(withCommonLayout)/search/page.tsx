'use client';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import DataTable from '@/components/pages/search/DataTable';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import Sidebar from '@/components/pages/search/Sidebar';
export type FilterType = 'peoples' | 'companies' | null;

const SearchPage = () => {
      const [collapsed, setCollapsed] = useState(false);
      const [activeFilter, setActiveFilter] = useState<FilterType>('peoples');

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
                        width={300}
                        collapsedWidth={60}
                  >
                        <div className="p-4">
                              <div className="flex justify-between">
                                    {!collapsed && (
                                          <div>
                                                <h1 className="text-xl font-bold text-title">Filters</h1>
                                          </div>
                                    )}
                                    <button onClick={toggleSidebar} className="mb-4 border border-[#BABABA] rounded-full">
                                          {collapsed ? (
                                                <GoChevronRight size={24} className="text-title" />
                                          ) : (
                                                <GoChevronLeft size={24} className="text-title" />
                                          )}
                                    </button>
                              </div>
                              {!collapsed && <Sidebar activeFilter={activeFilter} />}
                        </div>
                  </Sider>

                  {/* Main Content */}
                  <Layout
                        style={{
                              backgroundColor: 'transparent',
                        }}
                  >
                        <div className="p-4">
                              <DataTable activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                        </div>
                  </Layout>
            </Layout>
      );
};

export default SearchPage;
