'use client';
import PolicyHeader from '@/components/ui/shared/PolicyHeader';
import { useGetPrivacyQuery } from '@/redux/features/content/contentApi';
const PrivacyPolicyPage = () => {
      const { data: privacy } = useGetPrivacyQuery([]);
      return (
            <div className="min-h-[80vh]">
                  <PolicyHeader title="Data & " subTitle="Privacy Policy" />
                  <div className="bg-white p-10">
                        <div className="container">
                              <div
                                    dangerouslySetInnerHTML={{
                                          __html: privacy?.content as TrustedHTML,
                                    }}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default PrivacyPolicyPage;
