'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import HeaderImage from '@/assets/images/main/learnings-header.svg';
import Lock from '@/assets/images/learnings/lock.png';
import Speakerphone from '@/assets/images/learnings/mike.png';
import Graph from '@/assets/images/learnings/graph.png';
import Hand from '@/assets/images/learnings/hand.png';
import Profile from '@/assets/images/learnings/profile.png';
import Link from 'next/link';
import { Button } from 'antd';
import Logo from '@/assets/images/main/logo.svg';

const Learnings = () => {
       const categories = ['All', 'Privacy / Data', 'Marketing Operations', 'Sales Operations', 'HR'];
       const [activeCategory, setActiveCategory] = useState('All');
       const privacyData = [
              { id: 1, icon: Lock, label: 'Privacy/Data related' },
              { id: 2, icon: Speakerphone, label: 'Privacy/Data related' },
              { id: 3, icon: Graph, label: 'Privacy/Data related' },
              { id: 4, icon: Hand, label: 'Privacy/Data related' },
       ];
       const postsData = [
              {
                     id: 1,
                     readTime: '7 min read',
                     title: 'Your Post Title Here',
                     description: 'Brief description of the post goes here. Keep it short and concise.',
                     author: 'Admin',
                     authorImage: Profile,
              },
              {
                     id: 2,
                     readTime: '7 min read',
                     title: 'Another Post Title',
                     description: 'Another brief description. Keep it short and engaging.',
                     author: 'Admin',
                     authorImage: Profile,
              },
              // Add more posts as needed
       ];

       const postsData2 = [
              {
                     id: 1,
                     category: 'Sales Prospecting',
                     readTime: '5 min read',
                     title: 'How to Boost Your Sales Pipeline',
                     description: 'Learn effective strategies for building a stronger sales pipeline and closing more deals.',
                     author: 'Admin',
                     authorImage: Profile,
              },
              {
                     id: 2,
                     category: 'Marketing',
                     readTime: '7 min read',
                     title: 'Top 10 Marketing Trends in 2024',
                     description: 'Discover the latest trends in digital marketing and how they can transform your business.',
                     author: 'Admin',
                     authorImage: Profile,
              },
              {
                     id: 3,
                     category: 'Customer Success',
                     readTime: '6 min read',
                     title: 'Building Lasting Customer Relationships',
                     description: 'Explore tips on how to foster strong, long-term relationships with your customers.',
                     author: 'Admin',
                     authorImage: Profile,
              },
              {
                     id: 4,
                     category: 'Productivity',
                     readTime: '8 min read',
                     title: 'Time Management Tips for Busy Professionals',
                     description: 'Master time management with these tips to help you stay organized and productive.',
                     author: 'Admin',
                     authorImage: Profile,
              },
       ];

       return (
              <div className="my-20 container">
                     <div className=" flex flex-col items-center text-center relative h-[230px] my-14">
                            <div className=" flex-col md:flex-row items-center gap-10">
                                   <h1 className="text-5xl text-nowrap my-auto font-semibold">
                                          Our Latest <span className="text-primary">Blog</span>
                                   </h1>
                                   <p className="text-subtitle text-start">
                                          Ipsum commodo Sed sed libero, leo. lorem. sollicitudin. Ut est. Lorem facilisis convallis. Ut non.
                                          non. vitae faucibus placerat eu vitae lacus ex sapien risus malesuada Praesent tincidunt nec vitae
                                          sollicitudin. dui nec nibh enim. quis id eget vitae urna. luctus urna eget
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
                            {postsData.map((post) => (
                                   <div key={post.id} className="p-4 max-w-[450px]">
                                          <p className="text-primary text-lg mb-2">{post.readTime}</p>

                                          <p className="text-4xl mb-4 font-semibold">{post.description}</p>
                                          <div className="flex items-center space-x-2 mt-auto bg-[#F6F6F6] w-fit py-2 px-4 rounded-full">
                                                 <Image src={post.authorImage} alt="Author avatar" className="size-[40px] rounded-full" />
                                                 <span className="text-primary">Post by {post.author}</span>
                                          </div>
                                   </div>
                            ))}
                     </div>
                     <div className="flex flex-col md:flex-row gap-4 my-8">
                            {postsData2.map((post) => (
                                   <div key={post.id} className="p-4  bg-[#E9E9E9]">
                                          <div className="flex items-center justify-between">
                                                 <p className="text-primary mb-2">{post.category}</p>
                                                 <p className="text-primary mb-2">{post.readTime}</p>
                                          </div>

                                          <p className="text-xl mb-4 font-semibold">{post.description}</p>
                                          <div className="flex items-center space-x-2 mt-auto bg-[#F6F6F6] w-fit py-2 px-4 rounded-full">
                                                 <Image src={post.authorImage} alt="Author avatar" className="size-[40px] rounded-full" />
                                                 <span className="text-primary">Post by {post.author}</span>
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
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                   <div key={index} className="w-full h-full  text-white rounded-xl">
                                          <article className="space-y-4">
                                                 <div className="p-8 bg-[#121212] min-h-[222px] flex flex-col justify-center">
                                                        <h2 className="text-xl max-w-[20ch] mx-auto text-center w-full font-medium leading-tight">
                                                               Closing The Opportunity Gap: How Reaching Reveal Hidden Buyers
                                                        </h2>

                                                        <div className="flex justify-center my-3">
                                                               <div className="rounded-full px-6 py-2 border text-sm font-normal">
                                                                      Privacy / Data
                                                               </div>
                                                        </div>
                                                 </div>

                                                 <p className="text-[#9CA3AF] text-base leading-relaxed">
                                                        Ipsum commodo Sed sed libero, leo. lorem. sollicitudin. Ut est. Lorem facilisis
                                                        convallis. Ut non. non. vitae faucibus placerat eu vitae lacus ex sapien risus
                                                        malesuada Praesent tincidunt.{' '}
                                                        <Link href="#" className="text-primary hover:underline">
                                                               Read more {'>>'}
                                                        </Link>
                                                 </p>

                                                 <div className="flex items-center space-x-2 mt-auto bg-[#F6F6F6] w-fit py-2 px-4 rounded-full">
                                                        <Image src={Profile} alt="Author avatar" className="size-[40px] rounded-full" />
                                                        <span className="text-primary">Post by Admin</span>
                                                 </div>
                                          </article>
                                   </div>
                            ))}
                            <div className="bg-[#206ABD] p-8">
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
                                                 Ipsum commodo Sed sed libero, leo. lorem. sollicitudin. Ut est. Lorem facilisis convallis.
                                                 Ut non. non. vitae faucibus placerat
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
