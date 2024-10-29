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
                                   },
                                   components: {
                                          Button: {
                                                 fontWeight: 500,
                                                 paddingInline: ' 0px',
                                                 lineWidth: 15,
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
