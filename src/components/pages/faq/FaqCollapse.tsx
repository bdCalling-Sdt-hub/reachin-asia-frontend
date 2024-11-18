'use client';
import Loader from '@/components/ui/shared/Loader';
import { useGetFaqsQuery } from '@/redux/features/content/contentApi';
import { Collapse, theme } from 'antd';
import { BsPlusLg } from 'react-icons/bs';

const FaqCollapse = () => {
      const { token } = theme.useToken();
      const { data: faqs, isLoading } = useGetFaqsQuery([]);

      // Custom panel style
      const panelStyle = {
            marginBottom: 12,
            backgroundColor: '#F7F8FC',
            color: '#4E4E4E',
            border: 'none',
            padding: '20px 20px 20px 20px',
      };

      // Handling loading and error states
      if (isLoading) {
            return <Loader />;
      }

      return (
            <div className="container">
                  <div className="space-y-6 max-w-[901px] text-center mx-auto">
                        <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
                        <p className="text-subtitle">
                              Please see below for a list of common questions related to reaching billing and payment. If you have
                              any questions not answered here, please email finance@reachinasia.com
                        </p>
                        <h2 className="text-primary text-lg">About Billing and Invoices</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        {faqs?.map((item: { _id: string; question: string; answer: string }) => (
                              <Collapse
                                    key={item._id}
                                    bordered={false}
                                    defaultActiveKey={['1']}
                                    expandIcon={({ isActive }) => (
                                          <div>
                                                <BsPlusLg
                                                      color="#222222"
                                                      size={22}
                                                      className={`${isActive ? 'rotate-90' : 'rotate-0'}`}
                                                />
                                          </div>
                                    )}
                                    expandIconPosition="end"
                                    style={{
                                          background: token.colorBgContainer,
                                    }}
                                    items={[
                                          {
                                                key: item._id,
                                                label: <p className="text-[16px] font-medium">{item.question}</p>,
                                                children: item.answer ? (
                                                      <p className="text-gray-600">{item.answer}</p>
                                                ) : (
                                                      <p className="text-gray-400">Answer not provided.</p>
                                                ),
                                                style: panelStyle,
                                          },
                                    ]}
                              />
                        ))}
                  </div>
                  {/* <div className="flex justify-center">
                        <Pagination pageSize={3} total={faqs.length} />
                  </div> */}
            </div>
      );
};

export default FaqCollapse;
