import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import React, { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
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
                            <div className="bg-[#F8F9FD]">{children}</div>
                     </ConfigProvider>
              </AntdRegistry>
       );
};

export default Providers;
