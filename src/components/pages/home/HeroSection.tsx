'use client';
import { Button, Input } from 'antd';
import Image from 'next/image';
import HeroImg from '@/assets/images/home/hero-banner.svg';
import { IoSearchOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSearchText, setSelectedCategory } from '@/redux/features/filter/filterSlice';

const HeroSection = () => {
      const router = useRouter();
      const dispatch = useAppDispatch();
      const { selectedCategory, searchText } = useAppSelector((state) => state.filter);

      const categories = ['Prospecting Company', 'Person', 'Find Talent', 'Job'];

      const handleCategorySelect = (category: string) => {
            dispatch(setSelectedCategory(category));
      };

      const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setSearchText(event.target.value));
      };

      const handleAdvanceSearch = () => {
            router.push(`/search?q=${searchText}&category=${selectedCategory || ''}`);
      };

      return (
            <section className="bg-[#F8F9FD] min-h-[calc(100vh-80px)] grid justify-center  py-10 md:py-0">
                  <div className="container mx-auto flex flex-col-reverse md:flex-row gap-5 items-center justify-between ">
                        <div className="md:w-1/2 text-center md:text-left">
                              <p className="text-lg text-subtitle mb-4">Be the change that you wish to see in the world</p>
                              <h1 className="text-3xl font-semibold leading-10 md:text-5xl my-4">
                                    To Refine Your Business
                                    <br />
                                    For <span className="text-primary">Growth</span>
                              </h1>
                              <br />
                              <div>
                                    <Input
                                          value={searchText}
                                          onChange={handleSearchTextChange}
                                          prefix={<IoSearchOutline className="mx-5" color="#6B6B6B" size={22} />}
                                          style={{
                                                backgroundColor: 'white',
                                                border: 'none',
                                                height: 56,
                                                boxShadow: '2px 2px 5px #0000001A',
                                                borderRadius: 32,
                                                padding: 10,
                                                width: '100%',
                                          }}
                                          placeholder="Search here"
                                    />
                                    <div className="flex items-center flex-wrap justify-center gap-3 my-4">
                                          <p className="font-semibold">Discover:</p>
                                          {categories.map((category, index) => (
                                                <p
                                                      key={index}
                                                      className={`text-subtitle rounded-full py-1 px-3 border cursor-pointer ${
                                                            selectedCategory === category
                                                                  ? 'border-primary bg-primary text-white duration-300'
                                                                  : 'border-subtitle'
                                                      }`}
                                                      onClick={() => handleCategorySelect(category)}
                                                >
                                                      {category}
                                                </p>
                                          ))}
                                    </div>
                              </div>

                              {/* Buttons */}
                              <div className="flex flex-wrap gap-5 mt-5 md:gap-3 space-x-4 justify-center md:justify-start ">
                                    <Button
                                          onClick={handleAdvanceSearch}
                                          shape="round"
                                          style={{
                                                height: 40,
                                          }}
                                          type="primary"
                                    >
                                          Advance search
                                    </Button>
                              </div>
                        </div>

                        {/* Image Section */}
                        <div className="md:w-1/2 flex justify-center relative">
                              <Image src={HeroImg} alt="hero" width={675} height={500} className="object-contain relative z-10" />
                        </div>
                  </div>
            </section>
      );
};

export default HeroSection;
