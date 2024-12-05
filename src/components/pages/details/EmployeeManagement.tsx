'use client';
import { People } from '@/redux/features/data-management/dataManagementApi';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const EmployeesManagementLevel = ({ people }: { people: People }) => {
      const data = [
            { name: 'Manager', value: parseInt(people?.manager || '0'), color: '#D9792F' },
            { name: 'Director', value: parseInt(people?.directorCount || '0'), color: '#3D90E3' },
            { name: 'C-Level', value: parseInt(people?.cLevel || '0'), color: '#FFB84A' },
            { name: 'Non-Manager', value: parseInt(people?.nonManager || '0'), color: '#3CCF4E' },
            { name: 'Staff', value: parseInt(people?.totalEmployee || '0'), color: '#E3722D' },
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

                  <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
                        <div className="text-subtitle">
                              <p className="">{people?.openContact || '0'} Open Contacts</p>

                              <div className="flex items-center justify-between">
                                    <p>{people?.nonManager || '0'} Non - Manager</p>
                                    <p>{people?.directorCount || '0'} Director </p>
                              </div>
                              <div className="flex items-center justify-between">
                                    <p>{people?.manager || '0'} Manager</p>
                                    <p>{people?.cLevel || '0'} C-Level </p>
                              </div>
                        </div>
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
                  </div>
            </div>
      );
};

export default EmployeesManagementLevel;
