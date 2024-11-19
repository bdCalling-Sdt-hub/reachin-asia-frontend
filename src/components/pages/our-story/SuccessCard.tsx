'use client';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';
import Profile from '@/assets/images/our-story/profile.svg';

const SuccessCard = () => {
      return (
            <div className="bg-white">
                  <div className="container grid lg:grid-cols-2">
                        {/* Left Section */}
                        <div className="bg-[#1D6FDC] text-white p-8 lg:p-16 space-y-8">
                              <h2 className="text-4xl lg:text-4xl font-medium leading-tight">
                                    Bringing on Reaching Asia has been the best decision we’ve made
                              </h2>
                              <p className="text-white/80 leading-relaxed">
                                    Reaching Asia has transformed the way we work. Their innovative solutions have enabled us to
                                    streamline operations and maximize efficiency, making a significant difference in our
                                    productivity. The team&apos;s expertise and dedication are truly unmatched.
                              </p>
                              <div className="flex items-center gap-4">
                                    <Image src={Profile} alt="Profile" className="rounded-full" width={56} height={56} />
                                    <div>
                                          <h3 className="font-semibold text-lg">Shirley Smith</h3>
                                          <p className="text-white/80">CHO - Layerdraps</p>
                                    </div>
                              </div>
                        </div>

                        {/* Right Section */}
                        <div className="p-8 lg:p-16 flex flex-col justify-center items-start space-y-8">
                              <h2 className="text-3xl lg:text-4xl font-medium leading-tight">
                                    5x <br /> Increase in <br /> Productivity & <br /> 3x More Scheduled Demos
                              </h2>
                              <Button
                                    shape="round"
                                    style={{
                                          height: 46,
                                    }}
                                    type="primary"
                              >
                                    Read Success Stories
                              </Button>
                        </div>
                  </div>
            </div>
      );
};

export default SuccessCard;
