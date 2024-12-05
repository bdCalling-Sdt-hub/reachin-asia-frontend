import { People } from '@/redux/features/data-management/dataManagementApi';

// components/CompanyOverview.tsx
const CompanyOverview: React.FC<{ overview: string }> = ({ overview }) => {
      return (
            <div>
                  <h3 className="text-lg my-2 font-semibold">Company Overview</h3>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                        <p className="text-gray-500 mt-4">{overview}</p>
                  </div>
            </div>
      );
};

export default CompanyOverview;
