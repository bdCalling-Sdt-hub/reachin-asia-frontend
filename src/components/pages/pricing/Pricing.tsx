'use client';
import React, { useState } from 'react';
import { Button, ConfigProvider, message, Switch } from 'antd';
import MyCredit from './MyCredit';
import { TPackage, useGetPackagesQuery } from '@/redux/features/packages/packagesApi';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { useGetProfileQuery } from '@/redux/features/user/userApi';

const Pricing = () => {
      const router = useRouter();
      const { user } = useAppSelector((state) => state.auth);
      const { data: myProfile } = useGetProfileQuery(undefined, { skip: !user });

      const [priceType, setPriceType] = useState<'Monthly' | 'Yearly'>('Monthly');

      const { data: packages } = useGetPackagesQuery([{ name: 'paymentType', value: priceType }]);
      const handleSwitch = () => {
            setPriceType(priceType === 'Monthly' ? 'Yearly' : 'Monthly');
      };

      const handleBuyNow = (paymentLink: string) => {
            if (!user) {
                  message.warning('Please log in to make a purchase.');
                  router.push('/login');
            } else {
                  router.push(`${paymentLink}?prefilled_email=${user?.email}`);
            }
      };

      return (
            <div className="bg-[#F8F9FD] min-h-screen">
                  <div className="container py-10">
                        <MyCredit />

                        {/* Pricing Plans Header with Toggle */}
                        <div className="text-center mb-12 mt-5">
                              <br />
                              <h2 className="text-4xl font-semibold max-w-[25ch] mx-auto">
                                    Choose <span className="text-primary">Pricing Plans</span> Which Suits Your Needs.
                              </h2>
                              <br />

                              <div className="flex items-center justify-center space-x-5">
                                    <span className={`font-medium text-xl ${priceType === 'Monthly' ? 'text-primary' : ''}`}>
                                          Monthly
                                    </span>

                                    <ConfigProvider
                                          theme={{
                                                components: {
                                                      Switch: {
                                                            handleSize: 32,
                                                            innerMinMargin: 50,
                                                      },
                                                },
                                          }}
                                    >
                                          <Switch checked={priceType === 'Yearly'} onChange={handleSwitch} />
                                    </ConfigProvider>

                                    <span className={`font-medium text-xl ${priceType === 'Yearly' ? 'text-primary' : ''}`}>
                                          Annually
                                    </span>
                              </div>
                        </div>

                        {/* Pricing Plan Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-5 overflow-x-auto mx-auto border-[13px] border-primary rounded-xl">
                              {packages?.map((plan: TPackage) => (
                                    <div
                                          key={plan?._id}
                                          className="p-6 text-center border space-y-4 border-gray-200 flex flex-col justify-between h-full"
                                    >
                                          <div>
                                                <h3 className="text-xl font-semibold mb-3">{plan?.title}</h3>
                                                <p className="text-2xl text-subtitle mb-1">
                                                      {plan.price}
                                                      <span className="text-sm font-normal">/ {plan?.duration}</span>
                                                </p>
                                                {plan.description && (
                                                      <p className="text-lg text-subtitle mb-3">{plan?.description}</p>
                                                )}
                                                <p className="text-lg mb-6 text-subtitle">{plan?.credit} Credits/month</p>
                                          </div>
                                          <Button
                                                onClick={() => handleBuyNow(plan?.paymentLink)}
                                                style={{
                                                      width: '100%',
                                                }}
                                                shape="round"
                                                type="primary"
                                                className="w-full"
                                                size="large"
                                          >
                                                {myProfile?.isSubscribed ? 'Upgrade' : ' Buy Now'}
                                          </Button>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Pricing;
