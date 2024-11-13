'use client';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Collapse, Pagination, theme } from 'antd';
import Title from './shared/Title';
import { BsPlusLg } from 'react-icons/bs';

// FAQ Data Array
const faqData = [
       {
              key: '1',
              question: 'How can I update my billing address?',
              answer: '',
       },
       {
              key: '2',
              question: 'Why does my invoice include multiple quotes?',
              answer: '',
       },
       {
              key: '3',
              question: "What does the 'Service Period' on my invoice mean?",
              answer: 'The Service Period indicated on your invoice represents the duration of product usage. For instance, if you are billed monthly, the service period will specify the month for which you are being charged.',
       },
       {
              key: '4',
              question: 'Why does my invoice contain multiple product descriptions, purchase orders, service periods, and tax rates?',
              answer: '',
       },
       {
              key: '5',
              question: 'How can I get Reacher onboarded to my company payment portal?',
              answer: '',
       },
       {
              key: '6',
              question: 'Where should I send payment remittance details?',
              answer: '',
       },
       {
              key: '7',
              question: 'How can I update my Accounts Payable contact details?',
              answer: '',
       },
       {
              key: '8',
              question: 'Can I pay in a different currency?',
              answer: '',
       },
       {
              key: '9',
              question: 'Is auto-pay an option?',
              answer: '',
       },
       {
              key: '10',
              question: 'How can I get a copy of my invoice, statement of account, or contract?',
              answer: '',
       },
       {
              key: '11',
              question: "I'm confused about my invoice. Where can I get help?",
              answer: '',
       },
       {
              key: '12',
              question: 'What if my account is in collections and I want to resume service or settle my balance?',
              answer: '',
       },
       {
              key: '13',
              question: 'How can I access the payment portal?',
              answer: '',
       },
       {
              key: '14',
              question: 'What payment methods do you accept?',
              answer: '',
       },
       {
              key: '15',
              question: 'Can I get an extended payment term?',
              answer: '',
       },
       {
              key: '16',
              question: 'How do I submit my Purchase Order (PO) Number?',
              answer: '',
       },
];

const FaqCollapse = () => {
       const { token } = theme.useToken();

       // Custom panel style
       const panelStyle = {
              marginBottom: 12,

              backgroundColor: '#F7F8FC',
              color: '#4E4E4E',
              border: 'none',
              padding: '20px 20px 20px 20px',
       };

       // Function to generate Collapse items
       //    const getItems = (panelStyle: any) =>
       //           faqData.map((item) => ({
       //                  key: item.key,
       //                  label: <p className="text-[16px] font-medium">{item.question}</p>,
       //                  children: item.answer ? (
       //                         <p className="text-gray-600">{item.answer}</p>
       //                  ) : (
       //                         <p className="text-gray-400">Answer not provided.</p>
       //                  ),
       //                  style: panelStyle,
       //           }));

       return (
              <div className="container">
                     <div className="space-y-6 max-w-[901px] text-center mx-auto">
                            <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
                            <p className="text-subtitle">
                                   Please see below for a list of common questions related to reaching billing and payment. If you have any
                                   questions not answered here , please email finance@reachinasia.com
                            </p>
                            <h2 className="text-primary text-lg">About Billing and Invoices</h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {faqData.map((item) => (
                                   <Collapse
                                          key={item.key}
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
                                                        key: item.key,
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
                     <div className="flex justify-center">
                            <Pagination pageSize={3} total={faqData.length} />
                     </div>
              </div>
       );
};

export default FaqCollapse;
