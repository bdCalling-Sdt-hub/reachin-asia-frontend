'use client';
import Logo from '@/assets/images/main/logo.svg';
import Image from 'next/image';
import { PiMapPinLineLight } from 'react-icons/pi';
import Fb from '@/assets/images/details/social/fb.png';
import X from '@/assets/images/details/social/x.png';
import Linkedin from '@/assets/images/details/social/linkedin.png';
import Instagram from '@/assets/images/details/social/insta.png';
import YT from '@/assets/images/details/social/yt.png';

const BusinessCard: React.FC = () => {
       const socialMediaData = [
              { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
              { name: 'Facebook', icon: Fb, url: 'https://facebook.com' },
              { name: 'YouTube', icon: YT, url: 'https://youtube.com' },
              { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
              { name: 'X', icon: X, url: 'https://x.com' },
       ];
       return (
              <div className="bg-white container my-10 p-8 rounded-xl shadow">
                     <div className="grid grid-cols-12 ">
                            <div className="col-span-12 md:col-span-5 ">
                                   {/* Logo */}
                                   <div className="flex flex-col md:flex-row items-center gap-4 text-subtitle h-full">
                                          <Image src={Logo} alt="Company Logo" className="w-32 h-auto" />

                                          {/* Personal Information */}
                                          <div className="text-center">
                                                 <h2 className="text-xl font-semibold text-title ">Jack MA</h2>
                                                 <div className="flex items-center  gap-3">
                                                        <span>
                                                               <PiMapPinLineLight size={24} />
                                                        </span>
                                                        <p>Hong Kong, HKSAR, China</p>
                                                 </div>
                                                 <p>Business magnate Investor</p>
                                          </div>
                                   </div>
                            </div>

                            <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-3 my-4 justify-center text-center md:text-start">
                                   {/* Company Information */}
                                   <div className=" space-y-5">
                                          <div>
                                                 <p className="text-subtitle">Company Name</p>
                                                 <p className="font-semibold text-[#4E4E4E]">Alibaba Group</p>
                                          </div>

                                          <div>
                                                 <p className="text-subtitle">Website</p>
                                                 <p className="font-semibold text-[#4E4E4E]">www.alibaba.com</p>
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
                                                 <p className="font-semibold text-[#4E4E4E]">+100</p>
                                          </div>
                                          <div>
                                                 <p className="text-subtitle">EST. Revenue</p>
                                                 <p className="font-semibold text-[#4E4E4E]">$10.2M</p>
                                          </div>
                                   </div>
                                   <div className=" space-y-5">
                                          <div>
                                                 <p className="text-subtitle">Industry</p>
                                                 <p className="font-semibold text-[#4E4E4E]">Business Services</p>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default BusinessCard;
