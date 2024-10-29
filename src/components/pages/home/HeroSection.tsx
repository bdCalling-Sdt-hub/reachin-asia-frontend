import { Button, Input } from 'antd';
import Image from 'next/image';
import HeroImg from '@/assets/images/home/hero-banner.svg';
import { IoSearchOutline } from 'react-icons/io5';

const HeroSection = () => {
       return (
              <section className="min-h-[calc(100vh-80px)] grid justify-center">
                     <div className="container mx-auto flex flex-col-reverse md:flex-row gap-5 items-center justify-between ">
                            <div className="md:w-1/2 text-center md:text-left">
                                   <p className="text-lg text-subtitle mb-4">Be the change that you wish to see in the world</p>
                                   <h1 className="text-3xl font-semibold leading-10 md:text-5xl mb-4">
                                          To Refine Your Business
                                          <br />
                                          For <span className="text-primary">Growth</span>
                                   </h1>

                                   <div>
                                          <Input
                                                 prefix={<IoSearchOutline className="mx-5" color="#6B6B6B" size={22} />}
                                                 style={{
                                                        backgroundColor: 'white',
                                                        border: 'none',
                                                        height: 56,
                                                        boxShadow: '2px 2px 5px #0000001A',
                                                        borderRadius: 32,
                                                        padding: 10,
                                                 }}
                                                 placeholder="Search here"
                                          />
                                          <div className="flex items-center gap-3 my-4">
                                                 <p className="font-semibold">Discover:</p>
                                                 {['Prospecting Company', 'Person', 'Find Talent', 'Job'].map((item, index) => {
                                                        return (
                                                               <p
                                                                      className="text-subtitle rounded-full py-1 px-3 border border-subtitle"
                                                                      key={index}
                                                               >
                                                                      {item}
                                                               </p>
                                                        );
                                                 })}
                                          </div>{' '}
                                   </div>

                                   {/* Buttons */}
                                   <div className="flex flex-wrap gap-5 mt-5 md:gap-3 space-x-4 justify-center md:justify-start ">
                                          <Button
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
