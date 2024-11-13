import Phone from '@/assets/images/details/phone.png';
import Email from '@/assets/images/details/email.png';
import Image from 'next/image';
const ContactDetails: React.FC = () => {
       return (
              <div>
                     <h3 className="text-lg my-2 font-semibold">Contact Details</h3>

                     <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
                            <div className="space-y-3">
                                   <div className="flex items-center gap-3">
                                          <Image className="w-[32px]" alt="phone" src={Phone} height={500} width={500} />
                                          <div>
                                                 <p className="text-gray-500">HQ Phone</p>
                                                 <p className="text-gray-800 font-medium">+12345678910</p>
                                          </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                          <Image className="w-[32px]" alt="phone" src={Phone} height={500} width={500} />
                                          <div>
                                                 <p className="text-gray-500">Direct Line</p>
                                                 <p className="text-gray-800 font-medium">+12345678910</p>
                                          </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                          <Image className="w-[32px]" alt="phone" src={Phone} height={500} width={500} />
                                          <div>
                                                 <p className="text-gray-500">Mobile Number</p>
                                                 <p className="text-gray-800 font-medium">N/A</p>
                                          </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                          <Image className="w-[32px]" alt="phone" src={Email} height={500} width={500} />
                                          <div>
                                                 <p className="text-gray-500">Business Email</p>
                                                 <p className="text-gray-800 font-medium">nick.chan@reachinasla.com</p>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default ContactDetails;