'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/main/logo.svg';
import Profile from '@/assets/images/main/profile.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import MobileDrawer from './MobileDrawer';
import { Button, Dropdown } from 'antd';
import NavItems from './NavbarItems';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutUser } from '@/redux/features/auth/authSlice';
import { removeAccessToken } from '@/utils/authUtils';

const Navbar = () => {
      const dispatch = useAppDispatch();
      const [showDrawer, setShowDrawer] = useState(false);
      const { user } = useAppSelector((state) => state.auth);
      const items = [
            { label: 'Home', path: '/' },
            { label: 'Pricing', path: '/pricing' },
            {
                  label: 'About Us',

                  children: [
                        { label: 'Our Story', path: '/our-story' },
                        { label: 'Learning', path: '/learnings' },
                        { label: 'Faqs', path: '/faqs' },
                  ],
            },
            { label: 'Contact Sales', path: '/contact' },
      ];

      const handleMenuClick = () => {
            dispatch(logoutUser());
            removeAccessToken()
      };
      return (
            <header className={`container  text-subtitle h-[80px] `}>
                  <nav className="w-full h-full ">
                        <div className="flex justify-between items-center h-full">
                              {/* Logo */}
                              <Link href={'/'}>
                                    <Image alt="Logo" src={Logo} width={131} height={30} />
                              </Link>

                              {/* Nav Items for Desktop */}
                              <div className="hidden md:flex items-center gap-8">
                                    <NavItems items={items} />
                              </div>
                              <div className="hidden md:flex items-center space-x-3">
                                    {user ? (
                                          <Dropdown
                                                placement="bottomRight"
                                                trigger={['click']}
                                                dropdownRender={() => (
                                                      <div className="bg-white shadow-lg rounded-md p-2 max-w-[150px]">
                                                            <Button
                                                                  href="/profile"
                                                                  style={{
                                                                        color: '#4E4E4E',
                                                                  }}
                                                                  type="text"
                                                                  block
                                                                  className="text-left text-subtitle hover:bg-gray-100"
                                                            >
                                                                  View Profile
                                                            </Button>
                                                            <Button
                                                                  type="text"
                                                                  block
                                                                  danger
                                                                  className="text-left hover:bg-gray-100"
                                                                  onClick={() => handleMenuClick()}
                                                            >
                                                                  Logout
                                                            </Button>
                                                      </div>
                                                )}
                                          >
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                      <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
                                                            <Image
                                                                  src={Profile}
                                                                  alt="Profile"
                                                                  width={44}
                                                                  height={44}
                                                                  className="object-cover"
                                                            />
                                                      </div>
                                                      <p className="text-primary">Apu</p>
                                                </div>
                                          </Dropdown>
                                    ) : (
                                          <div className="flex items-center gap-3">
                                                <Link href="/login">
                                                      <Button
                                                            shape="round"
                                                            style={{
                                                                  backgroundColor: '#D9E8FB',
                                                                  height: 48,
                                                                  color: '#4E4E4E',
                                                            }}
                                                            type="primary"
                                                      >
                                                            Login
                                                      </Button>
                                                </Link>
                                                <Link href="/register">
                                                      <Button
                                                            shape="round"
                                                            style={{
                                                                  height: 48,
                                                            }}
                                                            type="primary"
                                                      >
                                                            Sign Up
                                                      </Button>
                                                </Link>
                                          </div>
                                    )}
                              </div>
                              <div className="md:hidden">
                                    <AiOutlineMenu
                                          onClick={() => setShowDrawer(!showDrawer)}
                                          className="text-primaryText cursor-pointer"
                                          size={24}
                                    />
                              </div>
                        </div>
                  </nav>

                  {/* Mobile Drawer */}
                  <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} />
            </header>
      );
};

export default Navbar;
