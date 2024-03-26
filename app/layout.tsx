import './../styles/globals.css';
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono';
export const metadata = {
  title: 'Dhanush C.',
  description: 'Portfolio for/by Dhanush Reddy Chilakala',
};

export default function RootLayout({children}) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable} selection:bg-[#f51919] selection:bg-opacity-55`}
      lang='en'
    >
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body>{children}</body>
    </html>
  );
}
