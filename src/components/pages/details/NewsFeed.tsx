// components/NewsFeed.tsx

import NewsImage from '@/assets/images/details/news2.png';
import { useGetNewsQuery } from '@/redux/features/news/newsApi';
import { Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const newsItems = [
      { title: 'Alibaba-backed Turkish ecommerce platform launches LLM', date: '21 March, 2024' },
      { title: 'Alibaba claims its new AI translation tool outperforms Google and ChatGPT', date: '21 March, 2024' },
      { title: 'Alibaba opens walled garden to rival JD.com’s logistics services', date: '21 March, 2024' },
      { title: 'Alibaba Gears Up for 2024 11.11 with Over $4 Billion in Consumer...', date: '21 March, 2024' },
      { title: 'Alibaba’s international arm says its new AI translation tool beats ...', date: '21 March, 2024' },
];

const NewsFeed: React.FC = () => {
      //       const [news, setNews] = useState([]);
      //       const [isLoading, setIsLoading] = useState(true);

      //       useEffect(() => {
      //             const fetchNews = async () => {
      //                   const response = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API}`);
      //                   const data = await response.json();
      //                   setNews(data);
      //                   setIsLoading(false);
      //             };

      //             fetchNews();
      //       }, []);
      //       console.log(news);
      // Todo: Free api doesnt work

      return (
            <div className="">
                  <h3 className="text-lg font-semibold my-2">News Feed</h3>
                  <div className="space-y-5">
                        {newsItems.map((item, index) => (
                              <div key={index} className="flex gap-3 bg-white p-4 rounded-lg shadow-md">
                                    <div className="w-[72pz] h-[72pz] overflow-hidden rounded-xl">
                                          <Image
                                                className="w-full h-full object-cover"
                                                src={NewsImage}
                                                alt=""
                                                width={110}
                                                height={110}
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <p className="text-gray-800 font-medium">{item.title}</p>
                                          <div className="flex items-center justify-between">
                                                <p className="text-gray-500 text-sm">{item.date}</p>
                                                <a href="#" className="text-primary underline text-sm">
                                                      Read more
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
                  <div className="flex justify-end">
                        <Button
                              style={{
                                    height: 42,
                                    width: 'fit-content',
                                    margin: '20px 0',
                              }}
                              shape="round"
                              type="primary"
                        >
                              See All News
                        </Button>
                  </div>
            </div>
      );
};

export default NewsFeed;
