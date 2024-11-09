'use client';
import Image from 'next/image';
import React from 'react';
import Auth from '@/assets/images/auth/auth.svg';
import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const SetNewPassword = () => {
       const router = useRouter();

       const onFinish = (values: FormData) => {
              console.log('Success:', values);
              router.push('/login');
       };

       return (
              <div>
                     <div className="grid grid-cols-1 md:grid-cols-2 items-center py-20 h-full">
                            <div className="logo order-2 md:order-1">
                                   <Image src={Auth} width={1000} height={1000} className="w-[600px] h-[502px] ms-auto" alt="logo" />
                            </div>
                            <div className="order-1 md:order-2 m-auto">
                                   <div className="bg-white min-w-[471px] p-8 shadow-sm">
                                          <Form name="set_new_password" onFinish={onFinish} layout="vertical">
                                                 <h2 className="text-2xl font-semibold text-title text-start mb-2">Set a new password</h2>
                                                 <p className="mb-4">
                                                        Create a new password. Ensure it differs from <br /> previous ones for security.
                                                 </p>

                                                 <Form.Item
                                                        name="password"
                                                        rules={[
                                                               { required: true, message: 'Please input your password!' },
                                                               { min: 8, message: 'Password must be at least 8 characters long.' },
                                                        ]}
                                                 >
                                                        <Input.Password
                                                               style={{ height: 46 }}
                                                               prefix={<LockOutlined className="mr-2" />}
                                                               placeholder="Password"
                                                               size="large"
                                                               className="rounded-lg"
                                                               iconRender={(visible) =>
                                                                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                                               }
                                                        />
                                                 </Form.Item>

                                                 <Form.Item
                                                        name="confirmPassword"
                                                        dependencies={['password']}
                                                        rules={[
                                                               { required: true, message: 'Please confirm your password!' },
                                                               ({ getFieldValue }) => ({
                                                                      validator(_, value) {
                                                                             if (!value || getFieldValue('password') === value) {
                                                                                    return Promise.resolve();
                                                                             }
                                                                             return Promise.reject(new Error('Passwords do not match!'));
                                                                      },
                                                               }),
                                                        ]}
                                                 >
                                                        <Input.Password
                                                               style={{ height: 46 }}
                                                               prefix={<LockOutlined className="mr-2" />}
                                                               placeholder="Confirm Password"
                                                               size="large"
                                                               className="rounded-lg"
                                                               iconRender={(visible) =>
                                                                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                                               }
                                                        />
                                                 </Form.Item>

                                                 <Form.Item>
                                                        <Button style={{ height: 46, width: '100%' }} type="primary" htmlType="submit">
                                                               Change password
                                                        </Button>
                                                 </Form.Item>
                                          </Form>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default SetNewPassword;
