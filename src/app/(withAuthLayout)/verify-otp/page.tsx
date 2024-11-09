'use client';
import Image from 'next/image';
import React from 'react';
import Auth from '@/assets/images/auth/auth.svg';
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
const VerifyOtp = () => {
       const router = useRouter();
       const onFinish = (values: FormData) => {
              console.log('Success:', values);
              router.push('/set-new-password');
       };
       return (
              <div>
                     <div className="grid grid-cols-1 md:grid-cols-2 items-center py-20 h-full">
                            <div className="logo order-2 md:order-1">
                                   <Image src={Auth} width={1000} height={1000} className="w-[600px] h-[502px] ms-auto" alt="logo" />
                            </div>
                            <div className="order-1 md:order-2  m-auto">
                                   <div className="bg-white min-w-[471px] p-8 shadow-sm">
                                          <Form
                                                 className=""
                                                 name="sign_in"
                                                 initialValues={{ remember: true }}
                                                 onFinish={onFinish}
                                                 layout="vertical"
                                          >
                                                 <h2 className="text-2xl font-semibold text-title text-start mb-6">
                                                        Confirm Verification Code
                                                 </h2>
                                                 <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                                        <Input.OTP length={6} style={{ height: 46 }} size="large" className="rounded-lg" />
                                                 </Form.Item>

                                                 <Form.Item>
                                                        <Button style={{ height: 46, width: '100%' }} type="primary" htmlType="submit">
                                                               Confirm Code
                                                        </Button>
                                                 </Form.Item>
                                                 <div className="text-center mt-4">
                                                        <div className="flex items-center gap-2">
                                                               <p> You have not received the email?</p>
                                                               <button className="text-primary">Resend</button>
                                                        </div>
                                                 </div>
                                          </Form>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default VerifyOtp;
