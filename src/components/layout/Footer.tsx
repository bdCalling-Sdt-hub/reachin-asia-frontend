import Image from 'next/image';
import Link from 'next/link';
import linkedIn from '@/assets/images/social/linkedin.png';
import facebook from '@/assets/images/social/facebook.png';
import youtube from '@/assets/images/social/youtube.png';
import x from '@/assets/images/social/x.png';
import instagram from '@/assets/images/social/instagram.png';
import Logo from '@/assets/images/main/logo.svg';
const Footer = () => {
       return (
              <footer className=" text-subtitle">
                     <div className="bg-white py-20">
                            <div className="container  mx-auto px-4 grid grid-cols-3  w-full justify-center text-center">
                                   {/* Logo and Motto */}
                                   <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                                          <Image src={Logo} alt="Reachin Logo" width={150} height={50} />
                                          <p className="mt-2 text-sm text-center md:text-left">
                                                 Be the changes that you wish to see in the world
                                          </p>
                                   </div>

                                   <div className="flex flex-col justify-center md:flex-row md:space-x-8  text-center md:text-left mt-4 md:mt-0 ">
                                          <div>
                                                 <Link href="/blogs" className="block mb-4">
                                                        Blogs
                                                 </Link>
                                                 <Link href="/about-us" className="block mb-4">
                                                        About Us
                                                 </Link>
                                                 <Link href="/pricing" className="block mb-4">
                                                        Pricing
                                                 </Link>
                                                 <Link href="/contact" className="block mb-4">
                                                        Contact Sales
                                                 </Link>
                                          </div>
                                   </div>
                                   <div className="flex flex-col justify-center md:flex-row md:space-x-8 text-center md:text-left mt-4 md:mt-0">
                                          <div>
                                                 <Link href="/terms-and-condition" className="block mb-4">
                                                        Terms of Use
                                                 </Link>
                                                 <Link href="/privacy-policy" className="block mb-4">
                                                        Data & Privacy Policy
                                                 </Link>
                                                 <Link href="/licence-terms" className="block mb-4">
                                                        License Terms & Conditions
                                                 </Link>
                                          </div>
                                   </div>
                            </div>
                     </div>

                     {/* Bottom Bar */}
                     <div className="bg-primary py-6">
                            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
                                   <p className="text-center md:text-left mb-2 md:mb-0">All Rights Reserved © Reachin Asia</p>
                                   <div className="flex space-x-4">
                                          <Link href="https://linkedin.com">
                                                 <Image src={linkedIn} alt="LinkedIn" width={24} height={24} />
                                          </Link>
                                          <Link href="https://facebook.com">
                                                 <Image src={facebook} alt="Facebook" width={24} height={24} />
                                          </Link>
                                          <Link href="https://youtube.com">
                                                 <Image src={youtube} alt="YouTube" width={24} height={24} />
                                          </Link>
                                          <Link href="https://x.com">
                                                 <Image src={x} alt="X" width={24} height={24} />
                                          </Link>
                                          <Link href="https://instagram.com">
                                                 <Image src={instagram} alt="Instagram" width={24} height={24} />
                                          </Link>
                                   </div>
                            </div>
                     </div>
              </footer>
       );
};

export default Footer;
