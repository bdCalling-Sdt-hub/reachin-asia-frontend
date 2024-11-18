'use client';
import Image from 'next/image';
import React from 'react';
import ProfileBannerImage from '@/assets/images/home/profile.svg';
import { Button, Form, Input, notification } from 'antd';
import { MailOutlined, LinkOutlined, GlobalOutlined, LinkedinOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { useGetProfileQuery, useUpdateProfileMutation } from '@/redux/features/user/userApi';
import { useAppSelector } from '@/redux/hooks';
import Loader from '@/components/ui/shared/Loader';
import { createFormDataFromValues } from '@/utils/formDataConverter';
import ProfileCredit from './ProfileCredit';
// import MyCredit from '../pricing/MyCredit';

const Profile = () => {
      const { user } = useAppSelector((state) => state.auth);
      const { data: profile, isLoading } = useGetProfileQuery(undefined, { skip: !user });
      const [updateProfile] = useUpdateProfileMutation();

      const onFinish = async (values: any) => {
            //
            const formData = createFormDataFromValues(values);
            try {
                  const res = await updateProfile(formData).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Something went wrong. Please try again.',
                  });
            }
      };
      if (isLoading) {
            return <Loader />;
      }

      return (
            <div className="container">
                  <div className="py-10">
                        <h1 className="text-4xl font-semibold ">User Details</h1>
                  </div>
                  <div className="grid grid-cols-12 items-start  h-full">
                        <div className="col-span-12 md:col-span-5 w-full order-1 md:order-1 m-auto">
                              <div className="max-w-[471px] mx-auto  md:mx-0 bg-white p-8 shadow-sm">
                                    <Form
                                          name="sign_up"
                                          initialValues={{
                                                company: profile?.company || '',
                                                website: profile?.website || '',
                                                email: profile?.email || '',
                                                name: profile?.name || '',
                                                contact: profile?.contact || '',
                                                linkedIn: profile?.linkedIn || '',
                                          }}
                                          onFinish={onFinish}
                                          layout="vertical"
                                    >
                                          <div className="space-y-4">
                                                <h2 className="text-2xl font-semibold  text-start ">Check Details Below</h2>
                                                <p className="text-subtitle">
                                                      I agree to RI’S Terms Of use and Privacy Policy.I understand that i will
                                                      receive a subscription to RI Lite community edition or no charge
                                                </p>
                                                <br />
                                          </div>

                                          <Form.Item name="company">
                                                <Input
                                                      style={{ height: 46 }}
                                                      prefix={<GlobalOutlined className="mr-2" />}
                                                      placeholder="Company name"
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          <Form.Item name="website">
                                                <Input
                                                      style={{ height: 46 }}
                                                      prefix={<LinkOutlined className="mr-2" />}
                                                      placeholder="Company web link"
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          <Form.Item name="email">
                                                <Input
                                                      style={{ height: 46 }}
                                                      prefix={<MailOutlined className="mr-2" />}
                                                      placeholder="Business Email"
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          <Form.Item name="name">
                                                <Input
                                                      style={{ height: 46 }}
                                                      prefix={<UserOutlined className="mr-2" />}
                                                      placeholder="Full name"
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          {/* <Form.Item name="password">
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
                                          </Form.Item> */}

                                          <Form.Item name="contact">
                                                <Input
                                                      style={{ height: 46 }}
                                                      prefix={<PhoneOutlined className="mr-2" />}
                                                      placeholder="Phone no"
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          <Form.Item name="linkedIn">
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

                                    <div>
                                          <ProfileCredit />
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
