import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const NavItems = ({ items, onClose }: { items: any[]; onClose?: () => void }) => {
       const pathname = usePathname();

       // Function to create the dropdown menu
       const createMenuItems = (children: any[]) =>
              children.map((child, childIndex) => ({
                     key: childIndex,
                     label: (
                            <Link
                                   style={{
                                          color: '#4E4E4E',
                                   }}
                                   onClick={onClose}
                                   className={`${pathname === child.path ? 'font-semibold' : ''}`}
                                   href={child.path}
                            >
                                   {child.label}
                            </Link>
                     ),
              }));

       return (
              <>
                     {items.map((item, index) => (
                            <div key={index} className="relative">
                                   {item.children ? (
                                          <Dropdown
                                                 className="cursor-pointer"
                                                 menu={{ items: createMenuItems(item.children) }} // Use menu instead of overlay
                                                 trigger={['click']}
                                                 placement="bottomLeft"
                                          >
                                                 <a onClick={(e) => e.preventDefault()}>
                                                        <Space>
                                                               <span
                                                                      className={`leading-4 ${
                                                                             pathname === item.path ? 'text-primary' : 'text-[#4E4E4E]'
                                                                      }`}
                                                               >
                                                                      {item.label}
                                                               </span>
                                                               <DownOutlined />
                                                        </Space>
                                                 </a>
                                          </Dropdown>
                                   ) : (
                                          <Link
                                                 onClick={onClose}
                                                 className={`text-text-primary leading-4 ${
                                                        pathname === item.path ? 'text-primary' : 'text-[#4E4E4E]'
                                                 }`}
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
