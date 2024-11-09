'use client';
import Image from 'next/image';
import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';

const Contact = () => {
       const onFinish = (values: FormData) => {
              console.log('Form Values:', values);
       };

       return (
              <div className="container">
                     <div className="my-20">
                            <h1 className="text-4xl font-semibold text-center mb-5">
                                   Customer <span className="text-primary">Support</span>
                            </h1>
                            <div className="bg-white max-w-[783px] grid justify-center mx-auto p-8 shadow-sm">
                                   <Form className="max-w-[460px] mx-auto " name="help_form" onFinish={onFinish} layout="vertical">
                                          <h2 className="text-2xl font-semibold text-center mb-6">We’re Here to Help</h2>
                                          <p className="text-gray-500 text-sm text-start mb-4">
                                                 I agree to RI&apos;s Terms Of Use and Privacy Policy. I understand that I will receive a
                                                 subscription to RI Lite community edition at no charge.
                                          </p>

                                          <div className="flex justify-center">
                                                 <Button
                                                        shape="round"
                                                        type="primary"
                                                        style={{ width: 'fit', marginBottom: '20px', height: 46 }}
                                                 >
                                                        <PhoneOutlined /> +1313165466
                                                 </Button>
                                          </div>

                                          <Form.Item name="helpTopic" rules={[{ required: true, message: 'Please select a topic' }]}>
                                                 <Select
                                                        style={{
                                                               height: 46,
                                                        }}
                                                        placeholder="How can we best help you today?"
                                                        size="large"
                                                        className="rounded-lg"
                                                 >
                                                        <Select.Option value="support">Support</Select.Option>
                                                        <Select.Option value="sales">Sales</Select.Option>
                                                        <Select.Option value="feedback">Feedback</Select.Option>
                                                 </Select>
                                          </Form.Item>

                                          <Form.Item name="fullName" rules={[{ required: true, message: 'Please enter your full name' }]}>
                                                 <Input
                                                        prefix={<UserOutlined className="mr-2" />}
                                                        placeholder="Full name"
                                                        size="large"
                                                        className="rounded-lg"
                                                        style={{ height: 46 }}
                                                 />
                                          </Form.Item>

                                          <Form.Item
                                                 name="email"
                                                 rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                                          >
                                                 <Input
                                                        prefix={<MailOutlined className="mr-2" />}
                                                        placeholder="Business Email"
                                                        size="large"
                                                        className="rounded-lg"
                                                        style={{ height: 46 }}
                                                 />
                                          </Form.Item>

                                          <Form.Item name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                                                 <Input
                                                        prefix={<PhoneOutlined className="mr-2 py-2" />}
                                                        placeholder="Phone no"
                                                        size="large"
                                                        className="rounded-lg"
                                                        style={{ height: 46 }}
                                                        addonBefore={
                                                               <Select defaultValue="+1" style={{ width: 70 }}>
                                                                      <Select.Option value="+1">+1</Select.Option>
                                                                      <Select.Option value="+85">+85</Select.Option>
                                                               </Select>
                                                        }
                                                 />
                                          </Form.Item>

                                          <Form.Item name="jobTitle" rules={[{ required: true, message: 'Please enter your job title' }]}>
                                                 <Input
                                                        placeholder="Job Title"
                                                        size="large"
                                                        className="rounded-lg"
                                                        style={{ height: 46 }}
                                                 />
                                          </Form.Item>

                                          <Form.Item>
                                                 <Button type="primary" htmlType="submit" style={{ height: 46, width: '100%' }}>
                                                        Send Message
                                                 </Button>
                                          </Form.Item>
                                   </Form>
                            </div>
                     </div>
              </div>
       );
};

export default Contact;
