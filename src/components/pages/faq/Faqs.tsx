import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';
import HeaderImage from '@/assets/images/faq/faq-header.png';
import { BsWallet2 } from 'react-icons/bs';
import FaqCollapse from './FaqCollapse';

const Faqs = () => {
       return (
              <div>
                     <section className="container min-h-[416px]">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                   <div className="space-y-6 max-w-xl">
                                          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight">
                                                 To Refine Your Business
                                                 <br />
                                                 For <span className="text-primary">Growth</span>
                                          </h1>

                                          <p className="text-gray-600 text-lg leading-relaxed">
                                                 Ipsum commodo Sed sed libero, leo. lorem. sollicitudin. Ut est. Lorem facilisis convallis.
                                                 Ut non. non. vitae faucibus placerat eu vitae lacus ex sapien risus malesuada Praesent
                                                 tincidunt
                                          </p>

                                          <Button type="primary" shape="round" style={{ height: 46 }}>
                                                 Contact Us
                                          </Button>
                                   </div>

                                   <div className="relative h-[400px] md:h-[500px] w-full">
                                          <Image
                                                 src={HeaderImage}
                                                 alt="Business Growth Illustration"
                                                 fill
                                                 className="object-contain"
                                                 priority
                                          />
                                   </div>
                            </div>
                     </section>

                     <section className="bg-white py-20">
                            <div className="max-w-4xl mx-auto p-6 space-y-6">
                                   <div className="text-center space-y-2">
                                          <h1 className="text-3xl font-bold">Stripe</h1>
                                          <p className="text-gray-500">Refer to the link provided at the bottom</p>
                                   </div>

                                   <div className="grid md:grid-cols-2 gap-10">
                                          <div className="bg-[#E9F1FA] rounded-md">
                                                 <div className="p-6 space-y-4">
                                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                                               <div className="h-6 w-6 text-white">
                                                                      <BsWallet2 size={24} />
                                                               </div>
                                                        </div>

                                                        <h2 className="text-xl font-semibold">USD Wire Transfer</h2>

                                                        <div className="space-y-1">
                                                               <p className="text-gray-600">
                                                                      <span className="text-blue-500">Bank:</span> The hong kong and
                                                                      shanghai Banking Corporation
                                                               </p>
                                                        </div>
                                                 </div>
                                          </div>

                                          <div className="bg-primary/70 rounded-md text-white">
                                                 <div className="p-6 space-y-4">
                                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                               <div className="h-6 w-6 text-white">
                                                                      <BsWallet2 color="black" size={24} />
                                                               </div>
                                                        </div>

                                                        <div className="space-y-2">
                                                               <p>
                                                                      <span className="font-medium">SWIFT Code:</span> HSBCHKHHHKH
                                                               </p>
                                                               <p>
                                                                      <span className="font-medium">Account Number:</span> 747-063477-001
                                                               </p>
                                                               <p>
                                                                      <span className="font-medium">Account Name:</span> Reachin (Asia)
                                                                      Limited
                                                               </p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>

                     <section className="bg-white py-20">
                            <FaqCollapse />
                     </section>
              </div>
       );
};

export default Faqs;
