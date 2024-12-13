'use client';

import { Company } from '@/redux/features/data-management/dataManagementApi';
import { Tooltip } from 'antd';
import { Cell, Pie, PieChart } from 'recharts';

const CompanyEmployeeManagement = ({ company }: { company: Company }) => {
      const data = [
            { name: 'Manager', value: parseInt(company?.total_manager || '0'), color: '#D9792F' },
            { name: 'C-Level', value: parseInt(company?.total_c_level || '0'), color: '#3D90E3' },
            { name: 'Open Contact', value: parseInt(company?.total_open_contact || '0'), color: '#FFB84A' },
            {
                  name: 'Non-Manager',
                  value: parseInt(company?.total_non_manager || '0'),

                  color: '#3CCF4E',
            },
            { name: 'Staff', value: parseInt(company?.total_staff || '0'), color: '#E3722D' },
      ];

      const total = data.reduce((acc, item) => acc + item.value, 0);

      const dataWithPercentages = data.map((item) => ({
            ...item,
            percentage: total > 0 ? Math.round((item.value / total) * 100) : 0,
      }));

      return (
            <div>
                  <h3 className="text-lg my-2 font-semibold">Employees By Management Level</h3>

                  <div className="bg-white grid md:grid-cols-2 items-center rounded-lg p-6 shadow-md space-y-4">
                        <div className="flex justify-center md:justify-start gap-4 items-center">
                              <PieChart width={200} height={200}>
                                    <Pie
                                          data={dataWithPercentages}
                                          cx="50%"
                                          cy="50%"
                                          innerRadius={50}
                                          outerRadius={80}
                                          paddingAngle={5}
                                          dataKey="value"
                                    >
                                          {dataWithPercentages.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                          ))}
                                    </Pie>
                                    <Tooltip />
                              </PieChart>
                              <ul className="mt-4 space-y-2 text-sm">
                                    {dataWithPercentages.map((entry, index) => (
                                          <li key={`legend-${index}`} className="flex items-center gap-2">
                                                <span
                                                      className="block w-3 h-3 rounded-sm"
                                                      style={{ backgroundColor: entry.color }}
                                                ></span>
                                                <span className="text-gray-600">{`${entry.percentage}% ${entry.name}`}</span>
                                          </li>
                                    ))}
                              </ul>
                        </div>
                        <div className="text-subtitle w-full">
                              <div className="flex items-center justify-between">
                                    <p>{company?.employee_total} Total Employee </p>
                                    <p>{company?.total_open_contact} Open Contact </p>
                              </div>
                              <div className="flex items-center justify-between">
                                    <p>{company?.total_manager} Manager</p>
                                    <p>{company?.total_c_level} C-Level </p>
                              </div>
                              <div className="flex items-center justify-between">
                                    <p>{company?.total_non_manager} Non-Manager </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CompanyEmployeeManagement;
