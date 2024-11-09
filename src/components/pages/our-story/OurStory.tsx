import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

import Timeline from './TimeLine';
import OurStoryHeader from './OurStoryHeader';
import SuccessCard from './SuccessCard';

const OurStory = () => {
       return (
              <>
                     <OurStoryHeader />
                     <Timeline />
                     <SuccessCard />
              </>
       );
};

export default OurStory;
