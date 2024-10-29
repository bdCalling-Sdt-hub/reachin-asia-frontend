import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const NavItems = ({ items, onClose }: { items: any[]; onClose?: () => void }) => {
       const pathname = usePathname();

       // Function to create the dropdown menu
       const createMenu = (children: any[]) => (
              <Menu>
                     {children.map((child, childIndex) => (
                            <Menu.Item key={childIndex}>
                                   <Link
                                          onClick={onClose}
                                          className={` ${pathname === child.path ? 'font-semibold' : ''}`}
                                          href={child.path}
                                   >
                                          {child.label}
                                   </Link>
                            </Menu.Item>
                     ))}
              </Menu>
       );

       return (
              <>
                     {items.map((item, index) => (
                            <div key={index} className="relative">
                                   {/* Check if the item has children */}
                                   {item.children ? (
                                          // If there are children, render a Dropdown
                                          <Dropdown
                                                 className="cursor-pointer"
                                                 overlay={createMenu(item.children)} // Use createMenu function
                                                 trigger={['click']}
                                                 placement="bottomLeft"
                                          >
                                                 <a onClick={(e) => e.preventDefault()}>
                                                        <Space>
                                                               <span
                                                                      className={` leading-4 ${
                                                                             pathname === item.path ? 'text-primary' : ''
                                                                      }`}
                                                               >
                                                                      {item.label}
                                                               </span>
                                                               <DownOutlined />
                                                        </Space>
                                                 </a>
                                          </Dropdown>
                                   ) : (
                                          // If no children, render a Link
                                          <Link
                                                 onClick={onClose}
                                                 className={`text-text-primary leading-4 ${pathname === item.path ? 'text-primary' : ''}`}
                                                 href={item.path}
                                          >
                                                 {item.label}
                                          </Link>
                                   )}
                            </div>
                     ))}
              </>
       );
};

export default NavItems;
