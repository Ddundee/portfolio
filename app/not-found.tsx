import Link from 'next/link';
import Button from '../components/button';

export default function NotFound() {
  return (
    <div className='h-screen w-screen justify-center items-center flex'>
      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-xl md:text-2xl font-light'>404 - Page Not Found</h1>
        <Link href={'/'}>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
