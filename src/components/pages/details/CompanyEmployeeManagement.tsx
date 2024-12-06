'use client';

import { Company } from '@/redux/features/data-management/dataManagementApi';
import { Tooltip } from 'antd';
import { Cell, Pie, PieChart } from 'recharts';

const CompanyEmployeeManagement = ({ company }: { company: Company }) => {
      // TODO: need dynamic data
      console.log('company', company);
      const data = [
            { name: 'Manager', value: 200, color: '#D9792F' },
            { name: 'Director', value: 100, color: '#3D90E3' },
            { name: 'C-Level', value: 50, color: '#FFB84A' },
            { name: 'Non-Manager', value: 400, color: '#3CCF4E' },
            { name: 'Staff', value: 800, color: '#E3722D' },
      ];

      // Calculate total for percentage
      const total = data.reduce((acc, item) => acc + item.value, 0);

      // Calculate percentages
      const dataWithPercentages = data.map((item) => ({
            ...item,
            percentage: total > 0 ? Math.round((item.value / total) * 100) : 0,
      }));

      return (
            <div>
                  <h3 className="text-lg my-2 font-semibold">Employees By Management Level</h3>

                  <div className="bg-white grid grid-cols-2 rounded-lg p-6 shadow-md space-y-4">
                        <div className="flex justify-center md:justify-start">
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
                                    <p>400 Non - Manager</p>
                                    <p>100 Director </p>
                              </div>
                              <div className="flex items-center justify-between">
                                    <p>200 Manager</p>
                                    <p>50 C-Level </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CompanyEmployeeManagement;
