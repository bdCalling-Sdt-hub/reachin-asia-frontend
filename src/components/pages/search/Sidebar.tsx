import { Collapse, Radio, Slider } from 'antd';

import { useAppDispatch } from '@/redux/hooks';
import {
      setSelectedAccuracyScore,
      setSelectedCompanyType,
      setSelectedEmployee,
      setSelectedEmployeeTotal,
      setSelectedFunction,
      setSelectedIndustry,
      setSelectedManageLevel,
      setSelectedOwnership,
      setSelectedPrimaryIndustry,
      setSelectedRegion,
      setSelectedRevenueRange,
      setSelectedSales,
      setSelectedSeniority,
      setSelectedSource,
      setSelectedSubIndustry,
} from '@/redux/features/filter/filterSlice';
import {
      companyTypes,
      employeeRanges,
      employeeTotals,
      functions,
      industries,
      ownershipTypes,
      primaryIndustries,
      regions,
      revenueRanges,
      salesRanges,
      seniorityLevels,
      sources,
      subIndustries,
} from './constant';
import { FilterType } from '@/app/(withCommonLayout)/search/page';

const { Panel } = Collapse;

type Props = {
      activeFilter: FilterType;
};
const Sidebar = ({ activeFilter }: Props) => {
      const dispatch = useAppDispatch();

      // Note: onChangeHandler is a function that returns a function
      const onChangeHandler = (actionCreator: (value: string) => any) => {
            return (checkedValues: string) => {
                  dispatch(actionCreator(checkedValues));
            };
      };

      // Note: onXXXChange is a function that returns a function
      // const onManageLevelChange = onChangeHandler(setSelectedManageLevel);
      const onCompanyTypeChange = onChangeHandler(setSelectedCompanyType);
      const onEmployeeChange = onChangeHandler(setSelectedEmployee);
      const onSalesChange = onChangeHandler(setSelectedSales);
      const onIndustryChange = onChangeHandler(setSelectedIndustry);
      const onPrimaryIndustryChange = onChangeHandler(setSelectedPrimaryIndustry);
      const onSubIndustryChange = onChangeHandler(setSelectedSubIndustry);
      const onRegionChange = onChangeHandler(setSelectedRegion);
      const onOwnershipChange = onChangeHandler(setSelectedOwnership);
      const onFunctionChange = onChangeHandler(setSelectedFunction);
      const onSeniorityChange = onChangeHandler(setSelectedSeniority);
      const onEmployeeTotalChange = onChangeHandler(setSelectedEmployeeTotal);
      const onSourceChange = onChangeHandler(setSelectedSource);
      const onRevenueRangeChange = onChangeHandler(setSelectedRevenueRange);
      const onAccuracyChange = onChangeHandler(setSelectedAccuracyScore);

      return (
            <div className="p-2">
                  {activeFilter === 'peoples' && (
                        <Collapse defaultActiveKey={[]} ghost expandIconPosition="end">
                              {/* <Panel header={<p className="text-[#6B6B6B]">Management Level</p>} key="management-level">
                                    <Radio.Group onChange={(e) => onManageLevelChange(e.target.value)} className="flex flex-col">
                                          <Radio value="">
                                                <span className="text-sm text-subtitle">All</span>
                                          </Radio>
                                          <Radio value="C-Level">
                                                <span className="text-sm text-subtitle">C-Level</span>
                                          </Radio>
                                          <Radio value="VP-Level">
                                                <span className="text-sm text-subtitle">VP-Level</span>
                                          </Radio>
                                          <Radio value="Director">
                                                <span className="text-sm text-subtitle">Director</span>
                                          </Radio>
                                    </Radio.Group>
                              </Panel> */}
                              {/* Accuracy Score Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Accuracy Score</p>} key="accuracy-score">
                                    <Slider min={0} max={100} onChange={(value) => onAccuracyChange(value.toString())} />
                              </Panel>
                              {/* Functions Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Functions</p>} key="functions">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onFunctionChange(e.target.value)}
                                    >
                                          {functions.map((func) => (
                                                <Radio key={func.value} value={func.value}>
                                                      <span className="text-sm text-subtitle">{func.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Seniority Levels Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Seniority Levels</p>} key="seniority-levels">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onSeniorityChange(e.target.value)}
                                    >
                                          {seniorityLevels.map((level) => (
                                                <Radio key={level.value} value={level.value}>
                                                      <span className="text-sm text-subtitle">{level.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Primary Industries Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Primary Industries</p>} key="primary-industries">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onPrimaryIndustryChange(e.target.value)}
                                    >
                                          {primaryIndustries.map((industry) => (
                                                <Radio key={industry.value} value={industry.value}>
                                                      <span className="text-sm text-subtitle">{industry.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Sub Industries Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Sub Industries</p>} key="sub-industries">
                                    <Radio.Group
                                          onChange={(e) => onSubIndustryChange(e.target.value)}
                                          className="flex flex-col gap-2"
                                    >
                                          {subIndustries.map((subIndustry) => (
                                                <Radio key={subIndustry.value} value={subIndustry.value}>
                                                      <span className="text-sm text-subtitle">{subIndustry.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Employee Totals Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Employee Totals</p>} key="employee-totals">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onEmployeeTotalChange(e.target.value)}
                                    >
                                          {employeeTotals.map((total) => (
                                                <Radio key={total.value} value={total.value}>
                                                      <span className="text-sm text-subtitle">{total.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Sources Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Sources</p>} key="sources">
                                    <Radio.Group className="flex flex-col gap-2" onChange={(e) => onSourceChange(e.target.value)}>
                                          {sources.map((source) => (
                                                <Radio key={source.value} value={source.value}>
                                                      <span className="text-sm text-subtitle">{source.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Revenue Ranges Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Revenue Ranges</p>} key="revenue-ranges">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onRevenueRangeChange(e.target.value)}
                                    >
                                          {revenueRanges.map((range) => (
                                                <Radio key={range.value} value={range.value}>
                                                      <span className="text-sm text-subtitle">{range.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>
                        </Collapse>
                  )}
                  {activeFilter === 'companies' && (
                        <Collapse defaultActiveKey={['accuracy-score']} ghost expandIconPosition="end">
                              {/* Company Type Section */}

                              <Panel header={<p className="text-[#6B6B6B]">Company Type</p>} key="company-type">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onCompanyTypeChange(e.target.value)}
                                    >
                                          {companyTypes.map((type) => (
                                                <Radio key={type.value} value={type.value}>
                                                      <span className="mx-2 my-1 text-subtitle block">{type.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Total Employees Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Total Employees</p>} key="total-employees">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onEmployeeChange(e.target.value)}
                                    >
                                          {employeeRanges.map((range) => (
                                                <Radio key={range.value} value={range.value}>
                                                      <span className="text-sm text-subtitle block mx-2 my-1">{range.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Sales Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Sales</p>} key="sales">
                                    <Radio.Group className="flex flex-col gap-2" onChange={(e) => onSalesChange(e.target.value)}>
                                          {salesRanges.map((range) => (
                                                <Radio key={range.value} value={range.value}>
                                                      <span className="text-sm text-subtitle block mx-2 my-1">{range.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>
                              <Panel header={<p className="text-[#6B6B6B]">Ownership</p>} key="ownership">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onOwnershipChange(e.target.value)}
                                    >
                                          {ownershipTypes.map((range) => (
                                                <Radio key={range.value} value={range.value}>
                                                      <span className="text-sm text-subtitle block mx-2 my-1">{range.label}</span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Industry Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Industry</p>} key="industry">
                                    <Radio.Group
                                          className="flex flex-col gap-2"
                                          onChange={(e) => onIndustryChange(e.target.value)}
                                    >
                                          {industries.map((industry) => (
                                                <Radio key={industry.value} value={industry.value}>
                                                      <span className="text-sm text-subtitle block mx-2 my-1">
                                                            {industry.label}
                                                      </span>
                                                </Radio>
                                          ))}
                                    </Radio.Group>
                              </Panel>

                              {/* Company Country Section */}
                              <Panel header={<p className="text-[#6B6B6B]">Countries</p>} key="regions">
                                    {regions.map((region) => (
                                          <div key={region.name} className="mb-4">
                                                <p className="font-bold">{region.name}</p>
                                                <Radio.Group
                                                      onChange={(e) => onRegionChange(e.target.value)}
                                                      className="flex flex-col gap-2"
                                                >
                                                      {region.countries.map((country) => (
                                                            <Radio key={country} value={country}>
                                                                  <span className="text-sm text-subtitle block mx-2 my-1">
                                                                        {country}
                                                                  </span>
                                                            </Radio>
                                                      ))}
                                                </Radio.Group>
                                          </div>
                                    ))}
                              </Panel>
                        </Collapse>
                  )}
            </div>
      );
};

export default Sidebar;
