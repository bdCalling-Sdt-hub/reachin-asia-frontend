'use client';
import Image from 'next/image';
import React from 'react';
import Auth from '@/assets/images/auth/auth.svg';
import { Button, Checkbox, Form, Input } from 'antd';
import { MailOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
const LoginPage = () => {
      const onFinish = (values: FormData) => {
            console.log('Success:', values);
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
                                          <Form.Item
                                                name="email"
                                                rules={[{ required: true, message: 'Please input your email!' }]}
                                          >
                                                <Input
                                                      style={{ height: 46 }}
                                                      prefix={<MailOutlined className="mr-2" />}
                                                      placeholder="Business Email"
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          <Form.Item
                                                name="password"
                                                rules={[
                                                      {
                                                            required: true,
                                                            message: 'Please input your password!',
                                                      },
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

                                          <Form.Item>
                                                <div className="flex justify-between items-center ">
                                                      <Checkbox
                                                            style={{
                                                                  color: '#818181',
                                                            }}
                                                      >
                                                            Remember Password
                                                      </Checkbox>
                                                      <a href="/forgot-password" className="text-[#54A7C3]">
                                                            Forgot Password?
                                                      </a>
                                                </div>
                                          </Form.Item>

                                          <Form.Item>
                                                <Button style={{ height: 46, width: '100%' }} type="primary" htmlType="submit">
                                                      Sign In
                                                </Button>
                                          </Form.Item>

                                          <div className="text-center mt-4">
                                                <p className="flex items-center gap-2">
                                                      <span> don&apos;t have an account?</span>
                                                      <a href="/register" className="text-primary">
                                                            Sign Up
                                                      </a>
                                                </p>
                                          </div>
                                    </Form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default LoginPage;
