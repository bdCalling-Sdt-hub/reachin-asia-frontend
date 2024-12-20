'use client';
import dynamic from 'next/dynamic';
import CompanyOverview from './CompanyOverView';
import ContactDetails from './ContactDetails';
const EmployeesManagementLevel = dynamic(() => import('@/components/pages/details/EmployeeManagement'), { ssr: false });
import Locations from './Location';
import NewsFeed from './NewsFeed';
import { useGetSinglePeopleQuery } from '@/redux/features/data-management/dataManagementApi';

interface Props {
      id: string;
}
const Dashboard = ({ id }: Props) => {
      const { data: people } = useGetSinglePeopleQuery(id);
      return (
            <div className="container">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                              <ContactDetails people={people!} />
                              <Locations people={people!} />
                        </div>

                        {/* Center Column */}
                        <div className="space-y-6">
                              <CompanyOverview overview={people?.company_overview!} />
                              <EmployeesManagementLevel people={people!} />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                              <NewsFeed query={people?.first_name + ' ' + people?.last_name!} />
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;
