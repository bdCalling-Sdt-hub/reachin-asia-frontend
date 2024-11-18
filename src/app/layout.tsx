import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/provider/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
      title: 'ReachIn',
      description: 'Boniness Development Outsourcing',
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="en">
                  <body className={inter.className}>
                        <Providers>{children}</Providers>
                  </body>
            </html>
      );
}
