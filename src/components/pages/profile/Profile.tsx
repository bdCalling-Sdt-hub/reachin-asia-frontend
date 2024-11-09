'use client';
import Image from 'next/image';
import React from 'react';
import ProfileBannerImage from '@/assets/images/home/profile.svg';
import { Button, Checkbox, Form, Input } from 'antd';
import {
       MailOutlined,
       LockOutlined,
       EyeTwoTone,
       EyeInvisibleOutlined,
       LinkOutlined,
       GlobalOutlined,
       LinkedinOutlined,
       UserOutlined,
       PhoneOutlined,
} from '@ant-design/icons';

const Profile = () => {
       const onFinish = (values: FormData) => {
              console.log('Success:', values);
       };

       return (
              <div className="container">
                     <div className="py-10">
                            <h1 className="text-4xl font-semibold ">User Details</h1>
                     </div>
                     <div className="grid grid-cols-12 items-start  h-full">
                            <div className="col-span-12 md:col-span-5 w-full order-1 md:order-1 m-auto">
                                   <div className="max-w-[471px] mx-auto bg-white p-8 shadow-sm">
                                          <Form name="sign_up" initialValues={{ remember: true }} onFinish={onFinish} layout="vertical">
                                                 <div className="space-y-4">
                                                        <h2 className="text-2xl font-semibold  text-start ">Check Details Below</h2>
                                                        <p className="text-subtitle">
                                                               I agree to RI’S Terms Of use and Privacy Policy.I understand that i will
                                                               receive a subscription to RI Lite community edition or no charge
                                                        </p>
                                                        <br />
                                                 </div>

                                                 <Form.Item
                                                        name="companyName"
                                                        rules={[{ required: true, message: 'Please input your company name!' }]}
                                                 >
                                                        <Input
                                                               style={{ height: 46 }}
                                                               prefix={<GlobalOutlined className="mr-2" />}
                                                               placeholder="Company name"
                                                               size="large"
                                                               className="rounded-lg"
                                                        />
                                                 </Form.Item>

                                                 <Form.Item
                                                        name="companyWebLink"
                                                        rules={[{ required: true, message: 'Please input your company web link!' }]}
                                                 >
                                                        <Input
                                                               style={{ height: 46 }}
                                                               prefix={<LinkOutlined className="mr-2" />}
                                                               placeholder="Company web link"
                                                               size="large"
                                                               className="rounded-lg"
                                                        />
                                                 </Form.Item>

                                                 <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                                        <Input
                                                               style={{ height: 46 }}
                                                               prefix={<MailOutlined className="mr-2" />}
                                                               placeholder="Business Email"
                                                               size="large"
                                                               className="rounded-lg"
                                                        />
                                                 </Form.Item>

                                                 <Form.Item
                                                        name="fullName"
                                                        rules={[{ required: true, message: 'Please input your full name!' }]}
                                                 >
                                                        <Input
                                                               style={{ height: 46 }}
                                                               prefix={<UserOutlined className="mr-2" />}
                                                               placeholder="Full name"
                                                               size="large"
                                                               className="rounded-lg"
                                                        />
                                                 </Form.Item>

                                                 <Form.Item
                                                        name="password"
                                                        rules={[{ required: true, message: 'Please input your password!' }]}
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
                                                        name="phone"
                                                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                                                 >
                                                        <Input
                                                               style={{ height: 46 }}
                                                               prefix={<PhoneOutlined className="mr-2" />}
                                                               placeholder="Phone no"
                                                               size="large"
                                                               className="rounded-lg"
                                                        />
                                                 </Form.Item>

                                                 <Form.Item
                                                        name="linkedin"
                                                        rules={[{ required: true, message: 'Please input your LinkedIn profile link!' }]}
                                                 >
                                                        <Input
                                                               style={{ height: 46 }}
                                                               prefix={<LinkedinOutlined className="mr-2" />}
                                                               placeholder="LinkedIn Profile link"
                                                               size="large"
                                                               className="rounded-lg"
                                                        />
                                                 </Form.Item>

                                                 <Form.Item>
                                                        <Button style={{ height: 46, width: '100%' }} type="primary" htmlType="submit">
                                                               Save Changes
                                                        </Button>
                                                 </Form.Item>
                                          </Form>
                                          <h1 className="text-lg mb-4 font-semibold">Credits</h1>
                                          <div className="bg-[#E9F1FA] p-4">
                                                 <div className="space-y-6">
                                                        <div className="space-y-1">
                                                               <h2 className="text-title font-medium ">Monthly Credit Usage</h2>
                                                               <p className="text-2xl ">
                                                                      <span className="text-primary">0</span>
                                                                      <span className="text-primary">/1000</span>
                                                               </p>
                                                        </div>

                                                        <div className="grid grid-cols-3 gap-4 border-t-2 border-[#999999] py-4">
                                                               <div className="space-y-1">
                                                                      <p className="text-title ">Used</p>
                                                                      <p className="text-xl  text-primary">0</p>
                                                               </div>

                                                               <div className="space-y-1">
                                                                      <p className="text-title ">Remaining</p>
                                                                      <p className="text-xl  text-primary">1000</p>
                                                               </div>

                                                               <div className="space-y-1">
                                                                      <p className="text-title ">Total</p>
                                                                      <p className="text-xl  text-primary">1000</p>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div className=" col-span-12 md:col-span-7 order-2  md:order-2">
                                   <Image
                                          src={ProfileBannerImage}
                                          width={1000}
                                          height={1000}
                                          className="w-[827px] h-[703px] mx-auto md:mr-auto"
                                          alt="logo"
                                   />
                            </div>
                     </div>
              </div>
       );
};

export default Profile;
