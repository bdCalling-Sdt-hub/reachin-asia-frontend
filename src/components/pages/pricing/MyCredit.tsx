import { useGetMyPackagesQuery } from '@/redux/features/packages/packagesApi';
import { useAppSelector } from '@/redux/hooks';

const MyCredit = () => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: myPackages } = useGetMyPackagesQuery(undefined, { skip: !user });

      const packageData = myPackages?.package;
      const remainingCredits = myPackages?.remaining;
      const usedCredits = packageData ? packageData.credit - (remainingCredits ?? 0) : 0;
      const totalCredits = packageData?.credit ?? 0;
      const remaining = remainingCredits ?? 0;

      return (
            <div>
                  {/* Credit Usage Section */}
                  {user && packageData && (
                        <div>
                              <h3 className="text-lg font-semibold text-start mb-4">Credits</h3>
                              <div className="bg-[#E9F1FA] p-6 w-full mx-auto mb-3">
                                    <div className="flex justify-around font-medium text-subtitle text-lg">
                                          <div className="text-center space-y-3">
                                                <p>Current Credit Balance</p>
                                                <p className="text-primary font-semibold">
                                                      {remaining}/{totalCredits}
                                                </p>
                                          </div>
                                          <div className="text-center space-y-3">
                                                <p>Used</p>
                                                <p className="text-primary font-semibold">{usedCredits}</p>
                                          </div>
                                          <div className="text-center space-y-3">
                                                <p>Remaining</p>
                                                <p className="text-primary font-semibold">{remaining}</p>
                                          </div>
                                          <div className="text-center space-y-3">
                                                <p>Total</p>
                                                <p className="text-primary font-semibold">{totalCredits}</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default MyCredit;
