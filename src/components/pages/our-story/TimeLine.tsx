'use client';
import React from 'react';
import { Timeline as AntdTimeline, Button } from 'antd';
import Dot from '@/assets/images/our-story/dot.svg';
import Men from '@/assets/images/our-story/men.svg';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { TStory, useGetStoriesQuery } from '@/redux/features/content/contentApi';
import Loader from '@/components/ui/shared/Loader';

const Timeline = () => {
      const { data: stories = [], isLoading } = useGetStoriesQuery([]);

      if (isLoading) {
            return <Loader />;
      }
      console.log(stories);
      return (
            <div className="bg-white py-20">
                  <div className="container">
                        <div className="text-center space-y-3 mb-8">
                              <h2 className="text-primary text-xl font-semibold">Be The Change</h2>
                              <h1 className="font-semibold text-5xl">Our Story</h1>
                        </div>

                        <AntdTimeline mode="alternate" className="relative">
                              {stories.map((story: TStory) => (
                                    <AntdTimeline.Item
                                          key={story._id}
                                          label={
                                                <div className="mx-2 md:mx-10">
                                                      <Button
                                                            shape="round"
                                                            style={{
                                                                  backgroundColor: 'transparent',
                                                                  color: '#2375D0',
                                                                  padding: '10px 15px',
                                                                  border: '1px solid #2375D0',
                                                            }}
                                                            type="primary"
                                                      >
                                                            {story.year}
                                                      </Button>
                                                </div>
                                          }
                                          dot={
                                                <div>
                                                      <Image src={Dot} alt="dot" width={20} height={20} />
                                                </div>
                                          }
                                    >
                                          <div className="bg-[#F8F9FD] min-h-[253px] max-w-[752px] p-5 w-full rounded-md">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                      <div className="text-start h-full">
                                                            <h3 className="text-xl md:text-2xl font-semibold">{story.subject}</h3>
                                                            <p className="text-subtitle my-2">{story.answer}</p>
                                                            <Link
                                                                  className="text-primary flex items-center gap-2"
                                                                  href={`/our-story/${story._id}`}
                                                            >
                                                                  Read More <HiChevronDoubleRight />
                                                            </Link>
                                                      </div>
                                                      <div className="h-full flex justify-center md:justify-end">
                                                            <Image
                                                                  src={Men}
                                                                  alt="story image"
                                                                  width={500}
                                                                  height={500}
                                                                  className="rounded-md w-[220px] md:w-[220px] object-cover"
                                                            />
                                                      </div>
                                                </div>
                                          </div>
                                    </AntdTimeline.Item>
                              ))}
                        </AntdTimeline>

                        <div className="bg-black max-w-[776px] mx-auto rounded flex flex-col justify-center w-full text-white text-center p-3 h-[230px]">
                              <Button
                                    type="primary"
                                    shape="round"
                                    style={{
                                          width: 'fit-content',
                                          margin: '0 auto',
                                          height: 46,
                                    }}
                              >
                                    Today
                              </Button>
                              <h1 className="text-3xl text-center my-2 font-medium">
                                    Our journey has just been started
                                    <br /> Write our next chapter together.
                              </h1>
                        </div>
                  </div>
            </div>
      );
};

export default Timeline;
