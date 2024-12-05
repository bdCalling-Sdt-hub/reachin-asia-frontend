import { People } from '@/redux/features/data-management/dataManagementApi';

// components/Locations.tsx
const Locations: React.FC<{ people: People }> = ({ people }) => {
      return (
            <div>
                  <h3 className="text-lg my-2 font-semibold">Locations</h3>

                  <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
                        <div className="space-y-3 text-subtitle">
                              <div>
                                    <p className=" font-medium">Local</p>
                                    <p>{people?.location}</p>
                              </div>
                              <div>
                                    <p className=" font-medium">HQ</p>
                                    <p>{people?.hqLocation}</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Locations;
