import Image from 'next/image';
import Logo from '@/assets/images/main/logo.svg';
import { ConfigProvider } from 'antd';
import Link from 'next/link';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
       return (
              <ConfigProvider
                     theme={{
                            token: {
                                   colorText: '#6B6B6B',
                            },
                            components: {
                                   Form: {
                                          marginLG: 16,
                                   },
                            },
                     }}
              >
                     <div className="min-h-[calc(100vh)] bg-[#F8F9FD] container py-10">
                            <Link href={'/'} className="logo">
                                   <Image src={Logo} width={500} height={500} className="w-[140px] h-[66px]" alt="logo" />
                            </Link>
                            {children}
                     </div>
              </ConfigProvider>
       );
};

export default AuthLayout;
