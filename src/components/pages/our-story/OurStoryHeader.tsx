'use client';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';
import OurStoryImage from '@/assets/images/our-story/hero.svg';
import { useAppSelector } from '@/redux/hooks';
const OurStoryHeader = () => {
      const { user } = useAppSelector((state) => state.auth);
      return (
            <div className="grid items-center container my-20 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-5 max-w-[490px]">
                        <h1 className="text-4xl font-semibold">
                              Our <span className="text-primary">Story</span>
                        </h1>
                        <p className="text-subtitle">
                              At Reaching Asia Ltd, we believe in the transformative power of data. Our journey began with a
                              mission to empower businesses and organizations with seamless data management solutions that drive
                              efficiency and innovation. Over the years, we’ve partnered with diverse clients, helping them unlock
                              the potential of their data to make informed decisions and achieve sustainable growth.
                        </p>
                        {!user && (
                              <Button
                                    href="/success-story"
                                    type="primary"
                                    shape="round"
                                    style={{
                                          width: 'fit',
                                          height: 46,
                                    }}
                              >
                                    Sign Up
                              </Button>
                        )}
                  </div>
                  <div>
                        <Image className="w-[592px]" src={OurStoryImage} width={1000} height={1000} alt="our-story" />
                  </div>
            </div>
      );
};

export default OurStoryHeader;
