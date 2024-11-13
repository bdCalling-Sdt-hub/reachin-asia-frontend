import BusinessCard from '@/components/pages/details/BusinessCard';
import Dashboard from '@/components/pages/details/Dashboard';

const DetailsPage = ({ params }: { params: { id: string } }) => {
       console.log(params.id);
       return (
              <div>
                     <BusinessCard />
                     <Dashboard />
              </div>
       );
};

export default DetailsPage;
