'use client';

import { TScrapingDog, useFetchGoogleResultsQuery } from '@/redux/base/scrappingDogApi';
import { Button } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const NewsFeed = ({ query }: { query: string }) => {
      const { data, error, isLoading } = useFetchGoogleResultsQuery({
            query: query || 'Alibaba',
      });

      const [showAll, setShowAll] = useState(false);

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error loading data.</p>;

      const displayedData = showAll ? data : data?.slice(0, 6);

      return (
            <div className="">
                  <h3 className="text-lg font-semibold my-2">News Feed</h3>
                  <div className="space-y-5">
                        {displayedData?.map((item: TScrapingDog, index: number) => (
                              <div key={index} className="flex gap-3 bg-white p-4 rounded-lg shadow-md">
                                    <div className="w-[72px] h-[72px] overflow-hidden rounded-xl">
                                          <Image
                                                className="w-full h-full object-cover"
                                                src={item.imgSrc}
                                                alt="News Thumbnail"
                                                width={110}
                                                height={110}
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <p className="text-gray-800 font-medium">{item.title}</p>
                                          <div className="flex items-center justify-between">
                                                <a href={item.url} className="text-primary underline text-sm">
                                                      Read more
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
                  {data && data.length > 6 && (
                        <div className="flex justify-end">
                              <Button
                                    style={{
                                          height: 42,
                                          width: 'fit-content',
                                          margin: '20px 0',
                                    }}
                                    shape="round"
                                    type="primary"
                                    onClick={() => setShowAll(!showAll)}
                              >
                                    {showAll ? 'Show Less' : 'See All News'}
                              </Button>
                        </div>
                  )}
            </div>
      );
};

export default NewsFeed;
