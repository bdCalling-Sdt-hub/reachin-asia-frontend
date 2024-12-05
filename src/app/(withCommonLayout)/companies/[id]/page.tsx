import CompanyBusinessCard from '@/components/pages/details/CompanyBussinessCard';
import CompanyDashboard from '@/components/pages/details/CompanyDashboard';

const CompanyDetailsPage = ({ params }: { params: { id: string } }) => {
      return (
            <div>
                  <CompanyBusinessCard id={params.id} />
                  <CompanyDashboard id={params.id} />
            </div>
      );
};

export default CompanyDetailsPage;
