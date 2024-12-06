'use client';
import CompanyEmployeeManagement from './CompanyEmployeeManagement';
import CompanyOverview from './CompanyOverView';

import NewsFeed from './NewsFeed';
import { useGetSingleCompanyQuery } from '@/redux/features/data-management/dataManagementApi';

interface Props {
      id: string;
}
const CompanyDashboard = ({ id }: Props) => {
      const { data: company } = useGetSingleCompanyQuery(id);
      return (
            <div className="container">
                  <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-4 space-y-6">
                              <NewsFeed />
                        </div>
                        <div className="col-span-12 md:col-span-8 space-y-6">
                              <CompanyOverview overview={company?.description as string} />
                              <CompanyEmployeeManagement company={company!} />
                        </div>
                  </div>
            </div>
      );
};

export default CompanyDashboard;
