// import ReduxProvider from '@/redux/lib/ReduxProviders';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
       const ReduxProviders = dynamic(() => import('@/redux/lib/ReduxProviders'), { ssr: false });
       return (
              <AntdRegistry>
                     <ConfigProvider
                            theme={{
                                   token: {
                                          colorPrimary: '#2375D0',
                                          fontSize: 16,
                                          fontFamily: 'inherit',
                                   },
                                   components: {
                                          Button: {
                                                 fontWeight: 500,
                                                 paddingInline: ' 0px',
                                                 lineWidth: 15,
                                          },
                                          Form: {
                                                 marginLG: 16,
                                          },
                                          Dropdown: {
                                                 fontFamily: 'inherit',
                                          },
                                          Table: {
                                                 fontSize: 14,
                                                 // borderColor: 'transparent',
                                                 headerBg: 'white',
                                                 colorText: '#4E4E4E',
                                                 headerColor: '#4E4E4E',
                                          },
                                   },
                            }}
                     >
                            <ReduxProviders>
                                   <div className="bg-[#F8F9FD]">{children}</div>
                            </ReduxProviders>
                     </ConfigProvider>
              </AntdRegistry>
       );
};

export default Providers;
