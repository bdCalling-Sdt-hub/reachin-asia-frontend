'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Lock from '@/assets/images/learnings/lock.png';
import Speakerphone from '@/assets/images/learnings/mike.png';
import Graph from '@/assets/images/learnings/graph.png';
import Hand from '@/assets/images/learnings/hand.png';
import Profile from '@/assets/images/learnings/profile.png';
import Link from 'next/link';
import { Button } from 'antd';
import Logo from '@/assets/images/main/logo.svg';
import { TBlog, useGetBlogsQuery, useGetFilteredBlogsQuery } from '@/redux/features/content/contentApi';
import moment from 'moment';
import { imageUrl } from '@/redux/base/baseApi';

const Learnings = () => {
      const categories = ['All', 'Privacy/Data', 'Marketing Operation', 'Sales Operation', 'HR'];
      const [activeCategory, setActiveCategory] = useState('All');

      const { data: blogData } = useGetBlogsQuery([]);
      const { data: filteredBlogsData } = useGetFilteredBlogsQuery([
            { name: 'category', value: activeCategory == 'All' ? '' : activeCategory },
      ]);
      console.log(filteredBlogsData);

      const privacyData = [
            { id: 1, icon: Lock, label: 'Privacy/Data related' },
            { id: 2, icon: Speakerphone, label: 'Privacy/Data related' },
            { id: 3, icon: Graph, label: 'Privacy/Data related' },
            { id: 4, icon: Hand, label: 'Privacy/Data related' },
      ];

      return (
            <div className="my-20 container">
                  <div className=" flex flex-col items-center text-center relative h-[200px] my-14">
                        <div className=" flex-col md:flex-row items-center gap-10">
                              <h1 className="text-5xl text-nowrap my-auto font-semibold">
                                    Our Latest <span className="text-primary">Blog</span>
                              </h1>
                              <p className="text-subtitle text-start my-4">
                                    Ipsum commodo Sed sed libero, leo. lorem. sollicitudin. Ut est. Lorem facilisis convallis. Ut
                                    non. non. vitae faucibus placerat eu vitae lacus ex sapien risus malesuada Praesent tincidunt
                                    nec vitae sollicitudin. dui nec nibh enim. quis id eget vitae urna. luctus urna eget
                              </p>
                        </div>
                        {/* <div className="absolute top-0 right-0 flex justify-end">
                                   <Image className="z-[0] w-[169px]" src={HeaderImage} alt="Header Image" height={400} width={500} />
                            </div> */}
                  </div>

                  <div className="flex-col  flex md:flex-row  gap-4">
                        {privacyData.map((item) => (
                              <div
                                    key={item.id}
                                    className="bg-primary text-white rounded-full flex  gap-3  items-center justify-center w-full  h-24 p-4"
                              >
                                    <Image src={item.icon} alt={`${item.label} icon`} className="size-[48px] mb-2" />
                                    <span className="text-center block">{item.label}</span>
                              </div>
                        ))}
                  </div>
                  <div className=" flex flex-col md:flex-row justify-between my-8">
                        {blogData?.blogs?.slice(0, 2).map((blog: TBlog) => (
                              <div key={blog._id} className="p-4 max-w-[450px]">
                                    <p className="text-primary text-lg mb-2"> {moment(blog.createdAt).fromNow()}</p>

                                    <p className="text-2xl md:text-4xl mb-4 font-semibold">{blog.subject}</p>
                                    <div className="flex items-center space-x-2 mt-auto bg-[#F6F6F6] w-fit py-2 px-4 rounded-full">
                                          <Image src={Profile} alt="Author avatar" className="size-[40px] rounded-full" />
                                          <span className="text-primary">Post by Admin</span>
                                    </div>
                              </div>
                        ))}
                  </div>
                  <div>
                        <h1 className="text-3xl text-nowrap my-auto font-semibold">Trending</h1>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 my-8">
                        {blogData?.blogs.slice(0, 4).map((post: TBlog) => (
                              <div key={post._id} className="p-4 min-w-[300px] md:max-w-[300px]  bg-[#E9E9E9]">
                                    <div className="flex items-center justify-between">
                                          <p className="text-primary mb-2">{post.category}</p>
                                          <p className="text-primary mb-2">{moment(post.createdAt).fromNow()}</p>
                                    </div>

                                    <p className="text-xl mb-4 font-semibold">{post.subject}</p>
                                    <div className="flex items-center space-x-2 mt-auto bg-[#F6F6F6] w-fit py-2 px-4 rounded-full">
                                          <Image src={Profile} alt="Author avatar" className="size-[40px] rounded-full" />
                                          <span className="text-primary">Post by Admin</span>
                                    </div>
                              </div>
                        ))}
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-20">
                        {categories.map((item, index) => (
                              <div
                                    key={index}
                                    onClick={() => setActiveCategory(item)}
                                    className={`cursor-pointer border rounded-full px-6 py-2 h-full text-lg ${
                                          activeCategory === item
                                                ? 'border-primary bg-primary text-white'
                                                : 'border-[#4E4E4E] text-[#4E4E4E] hover:border-primary hover:bg-primary hover:text-white'
                                    }`}
                              >
                                    <h2>{item}</h2>
                              </div>
                        ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 my-10 h-full">
                        {filteredBlogsData?.blogs.map((item: TBlog, index: string) => (
                              <div key={item._id} className="w-full h-full text-white rounded-xl">
                                    <article className="flex flex-col h-full space-y-4">
                                          <div
                                                style={{
                                                      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl}/${item.image})`,
                                                }}
                                                className="p-8 min-h-[222px] flex flex-col justify-center bg-cover bg-center"
                                          >
                                                <h2 className="text-xl max-w-[20ch] h-full mx-auto text-center w-full font-medium leading-tight">
                                                      {item.subject}
                                                </h2>

                                                <div className="flex justify-center my-3">
                                                      <div className="rounded-full px-6 py-2 border text-sm font-normal">
                                                            {item.category}
                                                      </div>
                                                </div>
                                          </div>

                                          <p className="text-[#9CA3AF] text-base leading-relaxed">
                                                {item.details}
                                                <Link
                                                      href={`/learnings/${item._id}`}
                                                      className="ms-2 text-primary hover:underline"
                                                >
                                                      Read more {'>>'}
                                                </Link>
                                          </p>

                                          {/* Post by Admin Section */}
                                          <div className="flex items-center space-x-2 mt-auto bg-[#F6F6F6] w-fit py-2 px-4 rounded-full">
                                                <Image src={Profile} alt="Author avatar" className="size-[40px] rounded-full" />
                                                <span className="text-primary">Post by Admin</span>
                                          </div>
                                    </article>
                              </div>
                        ))}
                        <div className="bgGredient p-8">
                              <div className="w-32">
                                    <Image src={Logo} alt="Reach in" width={128} height={40} className="w-[140px]" />
                              </div>
                              <br />

                              <div className="space-y-6 ">
                                    <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                          One Platform
                                          <br />
                                          To Power Your
                                          <br />
                                          Go-To-Market
                                    </h1>

                                    <p className="text-lg text-white/80 max-w-lg">
                                          Ipsum commodo Sed sed libero, leo. lorem. sollicitudin. Ut est. Lorem facilisis
                                          convallis. Ut non. non. vitae faucibus placerat
                                    </p>

                                    <Button
                                          type="primary"
                                          style={{
                                                backgroundColor: 'white',
                                                height: 46,
                                                color: 'black',
                                          }}
                                          shape="round"
                                    >
                                          Free Trial
                                    </Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Learnings;
