import { useGetMyPackagesQuery } from '@/redux/features/packages/packagesApi';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';

const ProfileCredit = () => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: myPackages } = useGetMyPackagesQuery(undefined, { skip: !user });

      const packageData = myPackages?.package;
      const remainingCredits = myPackages?.remaining;
      const usedCredits = packageData ? packageData.credit - (remainingCredits ?? 0) : 0;
      const totalCredits = packageData?.credit ?? 0;
      const remaining = remainingCredits ?? 0;
      return (
            <>
                  {user && packageData && (
                        <div className="bg-[#E9F1FA] p-4">
                              <h3 className="text-lg font-semibold text-start mb-4">Credits</h3>
                              <div className="space-y-6">
                                    <div className="space-y-1">
                                          <h2 className="text-title font-medium ">Current Credit Balance</h2>
                                          <p className="text-2xl ">
                                                <span className="text-primary">{remaining}</span>
                                                <span className="text-primary">/{totalCredits}</span>
                                          </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 border-t-2 border-[#999999] py-4">
                                          <div className="space-y-1">
                                                <p className="text-title ">Used</p>
                                                <p className="text-xl  text-primary">{usedCredits}</p>
                                          </div>

                                          <div className="space-y-1">
                                                <p className="text-title ">Remaining</p>
                                                <p className="text-xl  text-primary">{remaining}</p>
                                          </div>

                                          <div className="space-y-1">
                                                <p className="text-title ">Total</p>
                                                <p className="text-xl  text-primary">{totalCredits}</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  )}
            </>
      );
};

export default ProfileCredit;
