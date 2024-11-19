'use client';
import PolicyHeader from '@/components/ui/shared/PolicyHeader';
import { useGetTermsQuery } from '@/redux/features/content/contentApi';
const LicenseTerms = () => {
      const { data: termsAndCondition } = useGetTermsQuery([]);

      return (
            <div className="">
                  <PolicyHeader title="License " subTitle="Terms & Conditions" />
                  <div className="bg-white p-10">
                        <div className="container">
                              <div
                                    dangerouslySetInnerHTML={{
                                          __html: termsAndCondition?.content as TrustedHTML,
                                    }}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default LicenseTerms;
