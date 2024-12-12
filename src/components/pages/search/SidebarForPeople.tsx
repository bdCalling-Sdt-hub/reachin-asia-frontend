// components/SidebarForPeople.js
import { Collapse, Checkbox, Radio } from 'antd';
import { MdLocationCity } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSearchText, setSelectedCategory } from '@/redux/features/filter/filterSlice';

const { Panel } = Collapse;

// Job function data structure
const jobFunctions = [
      {
            title: 'C-Suite',
            items: [
                  'Engineering & Technical Executive',
                  'Executive',
                  'Finance Executive',
                  'Human Resources Executive',
                  'Information Technology Executive',
                  'Legal Executive',
                  'Marketing Executive',
                  'Medical & Health Executive',
                  'Operations Executive',
                  'Sales Executive',
            ],
      },
      {
            title: 'Engineering & Technical',
            items: [
                  'Artificial Intelligence / Machine Learning',
                  'Bioengineering',
                  'Biometrics',
                  'Business Intelligence',
                  'Chemical Engineering',
                  'Cloud / Mobility',
                  'Data Science',
                  'DevOps',
                  'Digital Transformation',
                  'Engineering Technology / Innovation',
                  'Engineering & Technical',
                  'Industrial Engineering',
                  'Mobile Development',
                  'Product Development',
                  'Product Management',
                  'Project Management',
                  'Research & Development',
                  'Scrum Master / Agile Coach',
                  'Software Development',
                  'Support / Technical Services',
                  'Technology Operations',
                  'Test / Quality Assurance',
                  'UI / UX',
                  'Web Development',
            ],
      },
      {
            title: 'Finance',
            items: [
                  'Accounting',
                  'Compliance',
                  'Controller',
                  'Financial Planning & Analysis',
                  'Financial Reporting',
                  'Financial Strategy',
                  'Financial Systems',
                  'Internal Audit & Control',
                  'Investor Relations',
                  'Mergers & Acquisitions',
                  'Real Estate',
                  'Risk',
                  'Shared Services',
                  'Sourcing / Procurement',
                  'Tax',
                  'Treasury',
            ],
      },
      {
            title: 'Human Resources',
            items: [
                  'Compensation & Benefits',
                  'Diversity & Inclusion',
                  'Employee & Labor Relations',
                  'Health & Safety',
                  'Human Resource Information System',
                  'Human Resources',
                  'Learning & Development',
                  'Organizational Development',
                  'Recruiting & Talent Acquisition',
                  'Talent Management',
                  'Workforce Management',
            ],
      },
      {
            title: 'Information Technology',
            items: [
                  'Application Development',
                  'Business Systems Management / ITSM',
                  'Cloud / Mobility',
                  'Collaboration & Web Apps',
                  'Data Center',
                  'Database Administration',
                  'eCommerce',
                  'Enterprise Architecture',
                  'Help Desk / Desktop Services',
                  'HR / Financial / ERP Systems',
                  'Information Security',
                  'Information Technology',
                  'Infrastructure',
                  'IT Asset Management',
                  'IT Audit / IT Compliance',
                  'IT Development',
                  'IT Strategy',
                  'IT Training',
                  'Networking',
                  'Project & Program Management',
                  'Quality Assurance',
                  'Retail / Store Systems',
                  'Servers',
                  'Storage & Disaster Recovery',
                  'Telecommunications',
                  'Virtualization',
            ],
      },
      {
            title: 'Legal',
            items: [
                  'Acquisitions',
                  'Compliance',
                  'Contracts',
                  'Corporate Secretary',
                  'eDiscovery',
                  'Ethics',
                  'Governance',
                  'Government Affairs & Regulatory Law',
                  'Intellectual Property & Patent',
                  'Labor & Employment',
                  'Lawyer / Attorney',
                  'Legal',
                  'Legal Counsel',
                  'Legal Operations',
                  'Litigation',
                  'Privacy',
            ],
      },
      {
            title: 'Marketing',
            items: [
                  'Advertising',
                  'Brand Management',
                  'Content Marketing',
                  'Customer Experience',
                  'Customer Marketing',
                  'Demand Generation',
                  'Digital Marketing',
                  'eCommerce',
                  'Event Marketing',
                  'Field Marketing',
                  'Graphic Design',
                  'Lead Generation',
                  'Marketing',
                  'Marketing Analytics / Insights',
                  'Marketing Communications',
                  'Marketing Operations',
                  'Product Marketing',
                  'Public Relations (PR)',
                  'Revenue Operations',
                  'Search Engine Optimization / Pay Per Click',
                  'Social Media Marketing',
                  'Strategic Communications',
                  'Technical Marketing',
            ],
      },
      {
            title: 'Medical & Health',
            items: [
                  'Anesthesiology',
                  'Chiropractic',
                  'Clinical Operations',
                  'Clinical Systems',
                  'Dentistry',
                  'Dermatology',
                  'Doctors / Physicians',
                  'Epidemiology',
                  'First Responder',
                  'Infectious Disease',
                  'Medical Administration',
                  'Medical Education & Training',
                  'Medical Research',
                  'Medicine',
                  'Neurology',
                  'Nursing',
                  'Nutrition & Dietetics',
                  'Obstetrics / Gynecology',
                  'Oncology',
                  'Ophthalmology',
                  'Optometry',
                  'Orthopedics',
                  'Pathology',
                  'Pediatrics',
                  'Pharmacy',
                  'Physical Therapy',
                  'Psychiatry',
                  'Psychology',
                  'Public Health',
                  'Radiology',
                  'Social Work',
                  'Surgery',
            ],
      },
      {
            title: 'Operations',
            items: [
                  'Call Center',
                  'Construction',
                  'Corporate Strategy',
                  'Customer Service / Support',
                  'Enterprise Resource Planning',
                  'Facilities Management',
                  'Leasing',
                  'Logistics',
                  'Office Operations',
                  'Operations',
                  'Physical Security',
                  'Project Development',
                  'Quality Management',
                  'Real Estate',
                  'Safety',
                  'Store Operations',
                  'Supply Chain',
            ],
      },
      {
            title: 'Sales',
            items: [
                  'Account Management',
                  'Business Development',
                  'Channel Sales',
                  'Customer Retention & Development',
                  'Enterprise Sales',
                  'Field / Outside Sales',
                  'Inside Sales',
                  'Partnerships',
                  'Revenue Operations',
                  'Sales',
                  'Sales Enablement',
                  'Sales Engineering',
                  'Sales Operations',
                  'Sales Training',
            ],
      },
];

const SidebarForPeople = () => {
      const dispatch = useAppDispatch();
      // const [selectedItems, setSelectedItems] = useState<string[]>([]);

      const onChange = (checkedValues: string) => {
            console.log('checked = ', checkedValues);
            dispatch(setSearchText(checkedValues));
      };

      return (
            <div className="p-4">
                  {/* Management Level Section */}
                  <h1 className="font-semibold flex items-center gap-3 mt-6 mb-4">
                        <span>
                              <PiUsersThree color="#2375D0" size={28} />
                        </span>
                        Management Level
                  </h1>
                  <Radio.Group onChange={(e) => onChange(e.target.value)} className="flex flex-col">
                        <div className="my-3 mx-5 " key="1">
                              <Radio value="All">
                                    <span className="text-sm text-subtitle">All</span>
                              </Radio>
                        </div>
                        <div className="my-3 mx-5 " key="2">
                              <Radio value="C-Level">
                                    <span className="text-sm text-subtitle">C-Level</span>
                              </Radio>
                        </div>
                        <div className="my-3 mx-5 " key="3">
                              <Radio value="VP-Level">
                                    <span className="text-sm text-subtitle">VP-Level</span>
                              </Radio>
                        </div>
                        <div className="my-3 mx-5 " key="4">
                              <Radio value="Director">
                                    <span className="text-sm text-subtitle">Director</span>
                              </Radio>
                        </div>
                  </Radio.Group>
                  <h1 className="font-semibold flex items-center gap-3 my-4 ">
                        <span>
                              <PiUsersThree color="#2375D0" size={28} />
                        </span>
                        Job Functions
                  </h1>

                  <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                        {jobFunctions.map((category, index) => (
                              <Panel header={<p className="text-[#6B6B6B]">{category.title}</p>} key={index.toString()}>
                                    <Radio.Group className="flex flex-col gap-2" onChange={(e) => onChange(e.target.value)}>
                                          {category.items.map((item) => (
                                                <Radio key={item} value={item}>
                                                      <span className="text-sm text-subtitle block">{item}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>
                        ))}
                  </Collapse>
            </div>
      );
};

export default SidebarForPeople;
