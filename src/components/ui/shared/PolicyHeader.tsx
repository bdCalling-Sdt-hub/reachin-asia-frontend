// PolicyHeader.tsx
import Image from 'next/image';
import HeaderImage from '@/assets/images/main/image.svg';

interface PolicyHeaderProps {
       title: string;
       subTitle: string;
}

const PolicyHeader: React.FC<PolicyHeaderProps> = ({ title, subTitle }) => {
       return (
              <div className="container flex flex-col items-center text-center relative h-[230px] my-14">
                     <h1 className="text-4xl my-auto">
                            {title} <span className="text-primary">{subTitle}</span>
                     </h1>
                     <div className="absolute top-0 right-0 flex justify-end">
                            <Image className="w-[298px]" src={HeaderImage} alt="Header Image" height={400} width={500} />
                     </div>
              </div>
       );
};

export default PolicyHeader;
