import BusinessCard from '@/components/pages/details/BusinessCard';
import Dashboard from '@/components/pages/details/Dashboard';

const PeopleDetails = ({ params }: { params: { id: string } }) => {
      return (
            <div>
                  <BusinessCard id={params.id} />
                  <Dashboard id={params.id} />
            </div>
      );
};

export default PeopleDetails;
