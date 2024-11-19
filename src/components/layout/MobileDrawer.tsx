import { Dispatch, SetStateAction } from 'react';
import NavItems from './NavbarItems';
import { Button, Drawer, Dropdown } from 'antd';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutUser } from '@/redux/features/auth/authSlice';
import { removeAccessToken } from '@/utils/authUtils';
import Image from 'next/image';
import { useGetProfileQuery } from '@/redux/features/user/userApi';
import Profile from '@/assets/images/main/profile.png';
const MobileDrawer = ({ open, setOpen, items }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; items: any[] }) => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: profile } = useGetProfileQuery(undefined, { skip: !user });
      const dispatch = useAppDispatch();
      const onClose = () => {
            setOpen(!open);
      };
      const handleMenuClick = () => {
            dispatch(logoutUser());
            removeAccessToken();
      };
      return (
            <Drawer placement="right" onClose={onClose} open={open}>
                  <div className="flex flex-col items-center gap-8">
                        <NavItems items={items} onClose={onClose} />
                  </div>
                  <div className="flex md:hidden justify-center my-2 items-center space-x-3">
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
                                          <p className="text-primary">{profile?.name}</p>
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
            </Drawer>
      );
};

export default MobileDrawer;
