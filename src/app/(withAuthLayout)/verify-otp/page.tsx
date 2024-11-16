'use client';
import Image from 'next/image';
import React from 'react';
import Auth from '@/assets/images/auth/auth.svg';
import { Button, Form, Input, notification } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForgetPasswordMutation, useVerifyEmailMutation } from '@/redux/features/auth/authApi';
const VerifyOtp = () => {
      const router = useRouter();
      const [verifyOtp] = useVerifyEmailMutation();
      const [forgetPassword] = useForgetPasswordMutation();
      const searchParams = useSearchParams();
      const purpose = searchParams.get('purpose');
      const onFinish = async (values: any) => {
            try {
                  const body = {
                        oneTimeCode: Number(values.oneTimeOtp),
                        email: localStorage.getItem('email'),
                  };
                  const res = await verifyOtp(body).unwrap();
                  if (res.success) {
                        notification.success({
                              message: 'Verification Successful',
                              description: res?.message,
                              duration: 3,
                        });
                        localStorage.removeItem('email');
                        localStorage.setItem('oneTimeToken', res.data);

                        if (purpose === 'reset-password') {
                              router.push('/set-new-password');
                        } else {
                              router.push('/login');
                        }
                  }
            } catch (error: any) {
                  notification.error({
                        message: 'Verify Failed',
                        description: error?.data?.message || 'Something went wrong. Please try again.',
                        duration: 3,
                  });
            }
      };
      const handleResentOtp = async () => {
            try {
                  const body = {
                        email: localStorage.getItem('email'),
                  };
                  const res = await forgetPassword(body).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                              duration: 3,
                        });
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Failed to resend OTP',
                  });
            }
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
                                          <h2 className="text-2xl font-semibold text-title text-start mb-6">
                                                Confirm Verification Code
                                          </h2>
                                          <Form.Item
                                                name="oneTimeOtp"
                                                rules={[{ required: true, message: 'Please input your email!' }]}
                                          >
                                                <Input.OTP
                                                      length={6}
                                                      style={{ height: 46 }}
                                                      size="large"
                                                      className="rounded-lg"
                                                />
                                          </Form.Item>

                                          <Form.Item>
                                                <Button style={{ height: 46, width: '100%' }} type="primary" htmlType="submit">
                                                      Confirm Code
                                                </Button>
                                          </Form.Item>
                                          <div className="text-center mt-4">
                                                <div className="flex items-center gap-2">
                                                      <p> You have not received the email?</p>
                                                      <button type="button" onClick={handleResentOtp} className="text-primary">
                                                            Resend
                                                      </button>
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
