'use client';
import PolicyHeader from '@/components/ui/shared/PolicyHeader';
import { useGetSingleBlogQuery, useGetSingleStoryQuery } from '@/redux/features/content/contentApi';
const OurStoryDetails = ({ params }: { params: { id: string } }) => {
      const { data: story } = useGetSingleStoryQuery(params.id);
      return (
            <div className="">
                  <PolicyHeader title="Founded on a " subTitle="Vision" />
                  <div className="bg-white p-10">
                        <div className="container text-subtitle space-y-5">
                              <h1 className="text-title text-4xl">{story?.subject}</h1>
                              <p>{story?.answer}</p>
                        </div>
                  </div>
            </div>
      );
};

export default OurStoryDetails;
