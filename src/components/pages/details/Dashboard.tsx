'use client';
import dynamic from 'next/dynamic';
import CompanyOverview from './CompanyOverView';
import ContactDetails from './ContactDetails';
const EmployeesManagementLevel = dynamic(() => import('@/components/pages/details/EmployeeManagement'), { ssr: false });

import Locations from './Location';
import NewsFeed from './NewsFeed';

const Dashboard: React.FC = () => {
       return (
              <div className="container">
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                   <ContactDetails />
                                   <Locations />
                            </div>

                            {/* Center Column */}
                            <div className="space-y-6">
                                   <CompanyOverview />
                                   <EmployeesManagementLevel />
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                   <NewsFeed />
                            </div>
                     </div>
              </div>
       );
};

export default Dashboard;
