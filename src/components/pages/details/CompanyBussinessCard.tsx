'use client';
import Logo from '@/assets/images/main/logo.svg';
import Image from 'next/image';
import { PiBuildingOfficeThin, PiHeadCircuitLight, PiMapPinLineLight } from 'react-icons/pi';
import Fb from '@/assets/images/details/social/fb.png';
import X from '@/assets/images/details/social/x.png';
import Linkedin from '@/assets/images/details/social/linkedin.png';
import Instagram from '@/assets/images/details/social/insta.png';
import YT from '@/assets/images/details/social/yt.png';
import { IoCallOutline } from 'react-icons/io5';
import { useGetSingleCompanyQuery } from '@/redux/features/data-management/dataManagementApi';
import { getImageUrl } from '@/utils/getImageUrl';

const CompanyBusinessCard = ({ id }: { id: string }) => {
      const { data: company } = useGetSingleCompanyQuery(id);
      console.log('company', company);
      const socialMediaData = [
            { name: 'Instagram', icon: Instagram, url: company?.instagram },
            { name: 'Facebook', icon: Fb, url: company?.facebook },
            { name: 'YouTube', icon: YT, url: company?.youtube },
            { name: 'LinkedIn', icon: Linkedin, url: company?.linkedin },
            { name: 'X', icon: X, url: company?.twitter },
      ].filter((item) => item.url !== undefined);

      console.log('socialMediaData', socialMediaData);
      return (
            <div className="bg-white container my-10 p-8 rounded-xl shadow">
                  <div className="grid grid-cols-12 ">
                        <div className="col-span-12 md:col-span-4 ">
                              {/* Logo */}
                              <div className="flex flex-col md:flex-row items-center gap-4 text-subtitle h-full">
                                    <Image
                                          height={100}
                                          width={100}
                                          src={getImageUrl(company?.image)}
                                          alt="Company Logo"
                                          className="w-32 h-auto"
                                    />

                                    {/* Personal Information */}
                                    <div className="text-start md:text-center">
                                          <h2 className="text-xl font-semibold text-title ">{company?.company_name}</h2>
                                          <div className="flex items-center  gap-3">
                                                <span>
                                                      <PiMapPinLineLight size={24} />
                                                </span>
                                                <p>{company?.address}</p>
                                          </div>
                                          <p>{company?.company_type}</p>
                                    </div>
                              </div>
                        </div>

                        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 my-4 justify-center text-center md:text-start">
                              {/* Company Information */}
                              <div className=" space-y-5">
                                    <div>
                                          <p className="text-subtitle">Company Name</p>
                                          <p className="font-semibold text-[#4E4E4E]">{company?.company_name}</p>
                                    </div>

                                    <div>
                                          <p className="text-subtitle">Location</p>
                                          <p className="font-semibold text-[#4E4E4E]">{company?.address}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                          <PiBuildingOfficeThin size={24} className="text-[#4F91D9] cursor-pointer" />
                                          <PiHeadCircuitLight size={24} className="text-[#4F91D9] cursor-pointer" />
                                          <div className="flex items-center gap-2">
                                                <IoCallOutline size={24} className="text-[#4F91D9] cursor-pointer" />
                                                <a href={`tel:${company?.phone}`}>{company?.phone}</a>
                                          </div>
                                    </div>
                                    {/* Social Media Icons */}
                              </div>

                              {/* Website and Revenue */}
                              <div className=" space-y-5">
                                    <div>
                                          <p className="text-subtitle">Website</p>
                                          <p className="font-semibold text-[#4E4E4E]">{company?.company_link}</p>
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

                                    <div>
                                          <p className="text-subtitle">HQ</p>
                                          <p className="font-semibold text-[#4E4E4E]">{company?.headquarters}</p>
                                    </div>
                              </div>
                              <div className=" space-y-5">
                                    <div>
                                          <p className="text-subtitle">EST. Revenue</p>
                                          <p className="font-semibold text-[#4E4E4E]">${company?.sales}</p>
                                    </div>
                                    <div>
                                          <p className="text-subtitle">EXT.Employee Count</p>
                                          <p className="font-semibold text-[#4E4E4E]">+{company?.employee_total}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CompanyBusinessCard;
