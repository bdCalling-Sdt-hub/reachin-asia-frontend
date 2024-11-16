import Image from 'next/image';
import React from 'react';
import BlogImage from '@/assets/images/learnings/blog.png';
const BlogDetails = () => {
       return (
              <div className="container my-10">
                     <div>
                            <div className="h-[456px]">
                                   <Image className="w-full h-full object-cover" src={BlogImage} height={600} width={600} alt="" />
                            </div>
                            <div className="my-5 space-y-4 text-subtitle">
                                   <h1 className="text-3xl font-semibold">A Scriptural look at Jesus’ teachings on marriage</h1>
                                   <p>
                                          Marriage is an eternal concept. It is meant to be a loving, intimate, selfless relationship
                                          between a man and a woman that lasts through eternity.
                                   </p>
                                   <p>
                                          Marriage is an eternal concept. It is meant to be a loving, intimate, selfless relationship
                                          between a man and a woman that lasts through eternity.
                                   </p>
                                   <p>
                                          Marriage is an eternal concept. It is meant to be a loving, intimate, selfless relationship
                                          between a man and a woman that lasts through eternity.
                                   </p>
                                   <p>
                                          Marriage is an eternal concept. It is meant to be a loving, intimate, selfless relationship
                                          between a man and a woman that lasts through eternity.
                                   </p>
                                   <p>
                                          Marriage is an eternal concept. It is meant to be a loving, intimate, selfless relationship
                                          between a man and a woman that lasts through eternity.
                                   </p>
                            </div>
                     </div>
              </div>
       );
};

export default BlogDetails;
