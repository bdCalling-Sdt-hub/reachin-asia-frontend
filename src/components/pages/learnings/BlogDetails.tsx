'use client';
import Image from 'next/image';
import React from 'react';
import BlogImage from '@/assets/images/learnings/blog.png';
import { useGetSingleBlogQuery } from '@/redux/features/content/contentApi';
import { imageUrl } from '@/redux/base/baseApi';
const BlogDetails = ({ id }: { id: string }) => {
      console.log(id);
      const { data: blog } = useGetSingleBlogQuery(id);
      console.log(blog);
      return (
            <div className="container my-10 min-h-screen">
                  <div>
                        <div className="h-[456px]">
                              <Image
                                    unoptimized
                                    className="w-full h-full object-cover"
                                    src={`${imageUrl}/${blog?.image}`}
                                    height={600}
                                    width={600}
                                    alt=""
                              />
                        </div>
                        <div className="my-5 space-y-4 text-subtitle">
                              <h1 className="text-3xl text-title font-semibold">{blog?.subject}</h1>
                              <p>{blog?.details}</p>
                        </div>
                  </div>
            </div>
      );
};

export default BlogDetails;
