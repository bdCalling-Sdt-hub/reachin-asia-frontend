'use client';
import Logo from '@/assets/images/main/logo.svg';
import Image from 'next/image';
import { PiMapPinLineLight } from 'react-icons/pi';
import Fb from '@/assets/images/details/social/fb.png';
import X from '@/assets/images/details/social/x.png';
import Linkedin from '@/assets/images/details/social/linkedin.png';
import Instagram from '@/assets/images/details/social/insta.png';
import YT from '@/assets/images/details/social/yt.png';
import { useGetSinglePeopleQuery } from '@/redux/features/data-management/dataManagementApi';

const BusinessCard = ({ id }: { id: string }) => {
      const { data: people } = useGetSinglePeopleQuery(id);
      const socialMediaData = [
            { name: 'Instagram', icon: Instagram, url: people?.company_instagram ? people?.company_instagram : '' },
            { name: 'Facebook', icon: Fb, url: people?.company_facebook ? people?.company_facebook : '' },
            { name: 'YouTube', icon: YT, url: people?.company_youtube ? people?.company_youtube : '' },
            { name: 'LinkedIn', icon: Linkedin, url: people?.company_linkedin ? people?.company_linkedin : '' },
            { name: 'X', icon: X, url: people?.company_twitter ? people?.company_twitter : '' },
      ].filter((item) => item.url !== '');
      return (
            <div className="bg-white container my-10 p-8 rounded-xl shadow">
                  <div className="grid grid-cols-12 ">
                        <div className="col-span-12 md:col-span-5 ">
                              {/* Logo */}
                              <div className="flex flex-col md:flex-row items-center gap-4 text-subtitle h-full">
                                    <Image src={Logo} alt="Company Logo" className="w-32 h-auto" />

                                    {/* Personal Information */}
                                    <div className="text-start">
                                          <h2 className="text-xl font-semibold text-title ">
                                                {people?.first_name + ' ' + people?.last_name}
                                          </h2>
                                          <div className="flex items-center  gap-3">
                                                <span>
                                                      <PiMapPinLineLight size={24} />
                                                </span>
                                                <p>
                                                      {people?.country}, {people?.city} , {people?.state}
                                                </p>
                                          </div>
                                          <p>{people?.title}</p>
                                    </div>
                              </div>
                        </div>

                        <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-3 my-4 justify-center text-center md:text-start">
                              {/* Company Information */}
                              <div className=" space-y-5">
                                    <div>
                                          <p className="text-subtitle">Company Name</p>
                                          <p className="font-semibold text-[#4E4E4E]">{people?.company_name}</p>
                                    </div>

                                    <div>
                                          <p className="text-subtitle">Website</p>
                                          <p className="font-semibold text-[#4E4E4E]">{people?.website}</p>
                                    </div>
                                    {/* Social Media Icons */}
                                    <div className="flex gap-4 justify-center md:justify-start mt-4 text-xl text-[#999999]">
                                          {socialMediaData.map((item, index) => (
                                                <a
                                                      key={index}
                                                      href={item.url}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      aria-label={item.name}
                                                      className="cursor-pointer hover:opacity-80 transition-opacity"
                                                >
                                                      <Image src={item.icon} alt={item.name} className="w-6 h-6" />
                                                </a>
                                          ))}
                                    </div>
                              </div>

                              {/* Website and Revenue */}
                              <div className=" space-y-5">
                                    <div>
                                          <p className="text-subtitle">EXT. Employee Count</p>
                                          <p className="font-semibold text-[#4E4E4E]">+{people?.employee_count}</p>
                                    </div>
                                    <div>
                                          <p className="text-subtitle">EST. Revenue</p>
                                          <p className="font-semibold text-[#4E4E4E]">${people?.revenue}</p>
                                    </div>
                              </div>
                              <div className=" space-y-5">
                                    <div>
                                          <p className="text-subtitle">Industry</p>
                                          <p className="font-semibold text-[#4E4E4E]">{people?.industry}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default BusinessCard;
