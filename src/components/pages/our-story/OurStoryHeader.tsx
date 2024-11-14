import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';
import OurStoryImage from '@/assets/images/our-story/hero.svg';
const OurStoryHeader = () => {
       return (
              <div className="grid items-center container my-20 grid-cols-1 md:grid-cols-2">
                     <div className="space-y-5 max-w-[490px]">
                            <h1 className="text-4xl font-semibold">
                                   Our <span className="text-primary">Story</span>
                            </h1>
                            <p className="text-subtitle">
                                   Ipsum commodo Sed sed libero, leo. lorem. sollicitudin. Ut est. Lorem facilisis convallis. Ut non. non.
                                   vitae faucibus placerat eu vitae lacus ex sapien risus malesuada Praesent tincidunt nec vitae
                                   sollicitudin. dui nec nibh enim. quis id eget vitae urna. luctus urna eget
                            </p>
                            <Button
                                   type="primary"
                                   shape="round"
                                   style={{
                                          width: 'fit',
                                          height: 46,
                                   }}
                            >
                                   Sign up
                            </Button>
                     </div>
                     <div>
                            <Image className="w-[592px]" src={OurStoryImage} width={1000} height={1000} alt="our-story" />
                     </div>
              </div>
       );
};

export default OurStoryHeader;
