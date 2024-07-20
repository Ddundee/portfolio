import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
     title: 'Dhanush R. Chilakala',
     description: 'A portfolio for me (Dhanush R. Chilakala).',
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang='en'>
               <body
                    className={`${GeistSans.className} m-4 bg-[#00080F] text-[#FDFFFF]`}
               >
                    {children}
               </body>
          </html>
     );
}
