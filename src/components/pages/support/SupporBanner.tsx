import { Button } from 'antd';
import Image from 'next/image';
import HeroImg from '@/assets/images/support/hero.png';

const SupportBanner = () => {
       return (
              <section className="min-h-[416px] grid justify-center my-10">
                     <div className="container mx-auto flex flex-col-reverse md:flex-row gap-5 items-center justify-between ">
                            <div className="md:w-1/2 text-center md:text-left">
                                   <h1 className="text-3xl font-semibold leading-10 md:text-5xl mb-4">
                                          To Refine Your Business
                                          <br />
                                          For <span className="text-primary">Growth</span>
                                   </h1>

                                   <p className="mb-6 text-subtitle w-full max-w-[70ch]">
                                          Empower your business with data-driven precision. Unlock insights, streamline operations, and
                                          drive growth with cutting-edge data management solutions.
                                   </p>

                                   {/* Buttons */}
                                   <div className="flex flex-wrap gap-5 mt-5 md:gap-3 space-x-4 justify-center md:justify-start ">
                                          <Button
                                                 shape="round"
                                                 style={{
                                                        height: 40,
                                                 }}
                                                 type="primary"
                                          >
                                                 Contact Us
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

export default SupportBanner;
