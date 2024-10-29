import { Dispatch, SetStateAction } from 'react';
import NavItems from './NavbarItems';
import { Button, Drawer } from 'antd';
import Link from 'next/link';

const MobileDrawer = ({ open, setOpen, items }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; items: any[] }) => {
       const onClose = () => {
              setOpen(!open);
       };

       return (
              <Drawer placement="right" onClose={onClose} open={open}>
                     <div className="flex flex-col items-center gap-8">
                            <NavItems items={items} onClose={onClose} />
                     </div>
                     <div className="flex items-center justify-center my-5 space-x-3">
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
                            {/* <Link href={'/profile'}>
                                                 <div className="flex items-center gap-4">
                                                        <div className="size-[44px] rounded-full ">
                                                               <Image
                                                                      src={Profile}
                                                                      alt="Profile"
                                                                      width={1000}
                                                                      height={1000}
                                                                      className="object-cover"
                                                               />
                                                        </div>
                                                        <p className="text-primary">Apu</p>
                                                 </div>
                                          </Link> */}
                     </div>
              </Drawer>
       );
};

export default MobileDrawer;
