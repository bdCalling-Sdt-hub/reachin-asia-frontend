// components/Sidebar.js
import { Collapse, Checkbox } from 'antd';
import { MdLocationCity } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi';

const { Panel } = Collapse;

const Sidebar = () => {
       return (
              <div className="">
                     <h1 className="font-semibold flex items-center gap-3 ">
                            <span>
                                   <PiUsersThree color="#2375D0" size={28} />
                            </span>
                            Management Level
                     </h1>
                     {/* Collapsible panels without default active state */}
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">All</p>} key="1">
                                   <Checkbox.Group className="flex flex-col">
                                          {/* <Checkbox value="Not Provided">Not Provided</Checkbox> */}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">C-Level</p>} key="2">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">VP-Level</p>} key="3">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">Director</p>} key="4">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">Manager</p>} key="5">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">Non-Manager</p>} key="6">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <h1 className="font-semibold flex items-center gap-3  my-4">
                            <span>
                                   <MdLocationCity color="#2375D0" size={28} />
                            </span>
                            Departments & Job Function
                     </h1>
                     {/* Collapsible panels without default active state */}
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">All</p>} key="1">
                                   <Checkbox.Group className="flex flex-col">
                                          {/* <Checkbox value="All">All</Checkbox>
                                         
                                          <Checkbox value="Non-Manager">Non-Manager</Checkbox> */}
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">C-Level</p>} key="2">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">VP-Level</p>} key="3">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">Director</p>} key="4">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">Manager</p>} key="5">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>
                     <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                            <Panel header={<p className="text-[#6B6B6B]">Non-Manager</p>} key="6">
                                   <Checkbox.Group className="flex flex-col">
                                          {' '}
                                          <div>Not Provided</div>
                                   </Checkbox.Group>
                            </Panel>
                     </Collapse>{' '}
              </div>
       );
};

export default Sidebar;
