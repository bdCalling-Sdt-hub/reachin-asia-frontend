'use client';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
const EmployeesManagementLevel: React.FC = () => {
       const data = [
              { name: 'Manager', value: 39, color: '#D9792F' },
              { name: 'Director', value: 38, color: '#3D90E3' },
              { name: 'C-Level', value: 27, color: '#FFB84A' },
              { name: 'Non-Manager', value: 22, color: '#3CCF4E' },
              { name: 'Staff', value: 20, color: '#E3722D' },
       ];
       return (
              <div>
                     <h3 className="text-lg my-2 font-semibold">Employees By Management Level</h3>

                     <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
                            <div className="text-subtitle">
                                   <p className="">124 Open Contacts</p>

                                   <div className="flex items-center justify-between">
                                          <p>99 Non - Manager</p>
                                          <p>7 Director </p>
                                   </div>
                                   <div className="flex items-center justify-between">
                                          <p>12 Manager</p>
                                          <p> 5 C-Level </p>
                                   </div>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                   <PieChart width={200} height={200}>
                                          <Pie
                                                 data={data}
                                                 cx="50%"
                                                 cy="50%"
                                                 innerRadius={50}
                                                 outerRadius={80}
                                                 paddingAngle={5}
                                                 dataKey="value"
                                          >
                                                 {data.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                 ))}
                                          </Pie>
                                          <Tooltip />
                                   </PieChart>
                                   <ul className="mt-4 space-y-2 text-sm">
                                          {data.map((entry, index) => (
                                                 <li key={`legend-${index}`} className="flex items-center gap-2">
                                                        <span
                                                               className="block w-3 h-3 rounded-sm"
                                                               style={{ backgroundColor: entry.color }}
                                                        ></span>
                                                        <span className="text-gray-600">{`${entry.value}% ${entry.name}`}</span>
                                                 </li>
                                          ))}
                                   </ul>
                            </div>
                     </div>
              </div>
       );
};

export default EmployeesManagementLevel;
