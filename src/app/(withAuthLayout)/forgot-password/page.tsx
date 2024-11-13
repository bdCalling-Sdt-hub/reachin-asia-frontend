'use client';
import Image from 'next/image';
import React from 'react';
import Auth from '@/assets/images/auth/auth.svg';
import { Button, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
const ForgetPassword = () => {
       const router = useRouter();
       const onFinish = (values: FormData) => {
              console.log('Success:', values);
              router.push('/verify-otp');
       };
       return (
              <div>
                     <div className="grid grid-cols-1 md:grid-cols-2 items-center py-20 h-full">
                            <div className="logo order-2 md:order-1">
                                   <Image src={Auth} width={1000} height={1000} className="w-[600px] h-[502px] ms-auto" alt="logo" />
                            </div>
                            <div className="order-1 md:order-2  m-auto">
                                   <div className="bg-white md:min-w-[471px] p-8 shadow-sm">
                                          <Form
                                                 className=""
                                                 name="sign_in"
                                                 initialValues={{ remember: true }}
                                                 onFinish={onFinish}
                                                 layout="vertical"
                                          >
                                                 <h2 className="text-2xl font-semibold text-title text-start mb-6">Sign In</h2>
                                                 <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                                        <Input
                                                               style={{ height: 46 }}
                                                               prefix={<MailOutlined className="mr-2" />}
                                                               placeholder="Business Email"
                                                               size="large"
                                                               className="rounded-lg"
                                                        />
                                                 </Form.Item>

                                                 <Form.Item>
                                                        <Button style={{ height: 46, width: '100%' }} type="primary" htmlType="submit">
                                                               Send Code
                                                        </Button>
                                                 </Form.Item>
                                          </Form>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default ForgetPassword;
