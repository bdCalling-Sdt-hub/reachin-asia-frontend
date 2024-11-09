'use client';
import React, { useState } from 'react';
import { Button, ConfigProvider, Dropdown, Menu, Switch } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Pricing = () => {
       const [isAnnual, setIsAnnual] = useState(false);

       // Pricing plans data
       const plans = [
              { name: 'Trial Plan', price: 50, credits: 10, details: '(First 6 months at USD 25) Payment in advance' },
              { name: 'Standard Plan', price: 50, credits: 10 },
              { name: 'Plus Plan', price: 135, credits: 10 },
              { name: 'Premium Plan', price: 200, credits: 10 },
              { name: 'Enterprise Plan', price: 350, credits: 10 },
       ];

       //    // Dropdown menu for user selection
       //    const userMenu = (
       //           <Menu>
       //                  <Menu.Item key="1">1 User</Menu.Item>
       //                  <Menu.Item key="5">5 Users</Menu.Item>
       //                  <Menu.Item key="10">10 Users</Menu.Item>
       //           </Menu>
       //    );

       return (
              <div className="bg-[#F8F9FD] min-h-screen">
                     <div className="container py-10">
                            {/* Credit Usage Section */}
                            <h3 className="text-lg font-semibold text-start mb-4">Credits</h3>
                            <div className="bg-[#E9F1FA] p-6  w-full mx-auto mb-3">
                                   <div className="flex justify-around font-medium text-subtitle text-lg">
                                          <div className="text-center space-y-3">
                                                 <p>Monthly Credit Usage</p>
                                                 <p className="text-primary font-semibold">999/1000</p>
                                          </div>
                                          <div className="text-center space-y-3">
                                                 <p>Used</p>
                                                 <p className="text-primary font-semibold">999</p>
                                          </div>
                                          <div className="text-center space-y-3">
                                                 <p>Remaining</p>
                                                 <p className="text-primary font-semibold">1</p>
                                          </div>
                                          <div className="text-center space-y-3">
                                                 <p>Total</p>
                                                 <p className="text-primary font-semibold">5000</p>
                                          </div>
                                   </div>
                            </div>

                            {/* Pricing Plans Header with Toggle */}
                            <div className="text-center mb-12 mt-5">
                                   <br />
                                   <h2 className="text-4xl font-semibold  max-w-[25ch] mx-auto ">
                                          Choose <span className="text-primary">Pricing Plans</span> Which Suits Your Needs.
                                   </h2>
                                   <br />

                                   <div className="flex items-center justify-center space-x-5">
                                          <span className={`font-medium text-xl ${!isAnnual ? 'text-primary' : ''}`}>Monthly</span>

                                          <ConfigProvider
                                                 theme={{
                                                        components: {
                                                               Switch: {
                                                                      handleSize: 32, // Adjust the handle size
                                                                      innerMinMargin: 50,
                                                               },
                                                        },
                                                 }}
                                          >
                                                 <Switch checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                                          </ConfigProvider>

                                          <span className={`font-medium text-xl ${isAnnual ? 'text-primary' : ''}`}>Annually</span>
                                   </div>
                            </div>

                            {/* Pricing Plan Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-5 overflow-x-auto mx-auto border-[13px] border-primary rounded-xl">
                                   {plans.map((plan, index) => (
                                          <div
                                                 key={index}
                                                 className="p-6 text-center border space-y-4 border-gray-200 flex flex-col justify-between h-full"
                                          >
                                                 <div>
                                                        <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>
                                                        <p className="text-2xl text-subtitle mb-1">
                                                               {isAnnual ? (plan.price * 12 * 0.9).toFixed(0) : plan.price} USD{' '}
                                                               <span className="text-sm font-normal">mo/user</span>
                                                        </p>
                                                        {plan.details && <p className="text-lg text-subtitle mb-3">{plan.details}</p>}
                                                        <p className="text-lg mb-6 text-subtitle">{plan.credits} Credits/month</p>
                                                 </div>
                                                 <Button
                                                        style={{
                                                               width: '100%',
                                                        }}
                                                        shape="round"
                                                        type="primary"
                                                        className="w-full"
                                                        size="large"
                                                 >
                                                        Buy Now
                                                 </Button>
                                          </div>
                                   ))}
                            </div>
                     </div>
              </div>
       );
};

export default Pricing;
