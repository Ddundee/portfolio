"use client";
import Button from "./../components/button";
import { useRouter } from 'next/navigation'

export default function NotFound() {

    const router = useRouter();

    return (
        <div className="h-screen w-screen justify-center items-center flex">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-xl md:text-2xl font-light">404 - Page Not Found</h1>
                <Button action={() => {router.push('/')}}>Go Home</Button>
            </div>
        </div>
    )
}
