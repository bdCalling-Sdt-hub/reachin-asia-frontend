'use client';
import Image from 'next/image';
import React from 'react';
import Auth from '@/assets/images/auth/register.svg';
import { Button, Checkbox, Form, Input, notification } from 'antd';
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
import { useCreateUserMutation } from '@/redux/features/user/userApi';

const RegisterPage = () => {
      const [form] = Form.useForm();
      const [registerUser] = useCreateUserMutation();
      const onFinish = async (values: FormData) => {
            try {
                  const res = await registerUser(values).unwrap();
                  if (res.success) {
                        notification.success({
                              message: 'Registration Successful',
                              description: 'Your account has been created successfully!',
                              duration: 3,
                        });
                  }
            } catch (error: any) {
                  notification.error({
                        message: 'Registration Failed',
                        description: error?.data?.message || 'Something went wrong. Please try again.',
                        duration: 3,
                  });
            }
      };

      return (
            <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center  h-full">
                        <div className="logo order-2 md:order-1">
                              <Image src={Auth} width={1000} height={1000} className="w-[600px] h-[502px] ms-auto" alt="logo" />
                        </div>
                        <div className="order-1 md:order-2 m-auto">
                              <div className="max-w-[471px] bg-white p-8 shadow-sm">
                                    <Form
                                          form={form}
                                          name="sign_up"
                                          initialValues={{
                                                company: 'Example Company',
                                                website: 'https://example.com',
                                                email: 'apusutradhar77@gmail.com',
                                                name: 'John Doe',
                                                password: '11111111',
                                                contact: '1234567890',
                                                linkedIn: 'https://linkedin.com/in/example',
                                          }}
                                          onFinish={onFinish}
                                          layout="vertical"
                                    >
                                          <h2 className="text-2xl font-semibold text-title text-start mb-6">Sign Up</h2>

                                          <Form.Item
                                                name="company"
                                                rules={[
                                                      { required: true, message: 'Please input your company name!' },
                                                      { min: 3, message: 'Company name must be at least 3 characters long!' },
                                                ]}
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
                                                name="website"
                                                rules={[
                                                      { required: true, message: 'Please input your company web link!' },
                                                      {
                                                            type: 'url',
                                                            message: 'Please enter a valid URL!',
                                                      },
                                                ]}
                                          >
                                                <Input
                                                      style={{ height: 46 }}
                                                      prefix={<LinkOutlined className="mr-2" />}
                                                      placeholder="Company web link"
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          <Form.Item
                                                name="email"
                                                rules={[
                                                      { required: true, message: 'Please input your email!' },
                                                      {
                                                            type: 'email',
                                                            message: 'Please enter a valid email address!',
                                                      },
                                                ]}
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
                                                name="name"
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
                                                name="contact"
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
                                                name="linkedIn"
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
                                                      Sign Up
                                                </Button>
                                          </Form.Item>

                                          <div className="text-center mt-4 mb-2">
                                                Have an account?
                                                <a href="/login" className="text-primary ml-2">
                                                      Log In
                                                </a>
                                          </div>
                                          <br />

                                          <Form.Item
                                                className="mt-4"
                                                name="terms"
                                                valuePropName="checked"
                                                rules={[
                                                      {
                                                            validator: (_, value) =>
                                                                  value
                                                                        ? Promise.resolve()
                                                                        : Promise.reject(
                                                                                new Error(
                                                                                      'Please agree to the Terms of Use and Privacy Policy.'
                                                                                )
                                                                          ),
                                                      },
                                                ]}
                                          >
                                                <Checkbox
                                                      onChange={(e) => {
                                                            form.setFieldsValue({ terms: e.target.checked });
                                                            form.validateFields(['terms']); // Trigger validation manually
                                                      }}
                                                >
                                                      I agree to RI&apos;s Terms of Use and Privacy Policy. I understand that I
                                                      will receive a subscription to RI Lite community edition at no charge.
                                                </Checkbox>
                                          </Form.Item>

                                          <Form.Item
                                                name="communications"
                                                valuePropName="checked"
                                                rules={[
                                                      {
                                                            validator: (_, value) =>
                                                                  value
                                                                        ? Promise.resolve()
                                                                        : Promise.reject(
                                                                                new Error(
                                                                                      'Please agree to receive communications from RI.'
                                                                                )
                                                                          ),
                                                      },
                                                ]}
                                          >
                                                <Checkbox
                                                      onChange={(e) => {
                                                            form.setFieldsValue({ communications: e.target.checked });
                                                            form.validateFields(['communications']); // Trigger validation manually
                                                      }}
                                                >
                                                      I agree to receive communications from RI with information and offers
                                                      related to RI&apos;s products and services.
                                                </Checkbox>
                                          </Form.Item>
                                    </Form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default RegisterPage;
