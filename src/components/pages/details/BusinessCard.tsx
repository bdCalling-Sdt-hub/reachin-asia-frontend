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
            { name: 'Instagram', icon: Instagram, url: people?.instagram || 'https://instagram.com' },
            { name: 'Facebook', icon: Fb, url: people?.facebook || 'https://facebook.com' },
            { name: 'YouTube', icon: YT, url: people?.youtube || 'https://youtube.com' },
            { name: 'LinkedIn', icon: Linkedin, url: people?.linkedin || 'https://linkedin.com' },
            { name: 'X', icon: X, url: people?.twitter || 'https://x.com' },
      ];
      return (
            <div className="bg-white container my-10 p-8 rounded-xl shadow">
                  <div className="grid grid-cols-12 ">
                        <div className="col-span-12 md:col-span-5 ">
                              {/* Logo */}
                              <div className="flex flex-col md:flex-row items-center gap-4 text-subtitle h-full">
                                    <Image src={Logo} alt="Company Logo" className="w-32 h-auto" />

                                    {/* Personal Information */}
                                    <div className="text-start md:text-center">
                                          <h2 className="text-xl font-semibold text-title ">{people?.name}</h2>
                                          <div className="flex items-center  gap-3">
                                                <span>
                                                      <PiMapPinLineLight size={24} />
                                                </span>
                                                <p>{people?.location}</p>
                                          </div>
                                          <p>{people?.designation}</p>
                                    </div>
                              </div>
                        </div>

                        <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-3 my-4 justify-center text-center md:text-start">
                              {/* Company Information */}
                              <div className=" space-y-5">
                                    <div>
                                          <p className="text-subtitle">Company Name</p>
                                          <p className="font-semibold text-[#4E4E4E]">{people?.companyName}</p>
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
                                          <p className="font-semibold text-[#4E4E4E]">+{people?.totalEmployee}</p>
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
