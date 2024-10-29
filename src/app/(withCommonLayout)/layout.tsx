import Navbar from '@/components/layout/Navbar';
import { ReactNode } from 'react';

export default function CommonLayout({ children }: { children: ReactNode }) {
       return (
              <>
                     <Navbar />
                     {children}
              </>
       );
}
