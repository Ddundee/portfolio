import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


export default function NavBar() {
    return (
        <nav className="flex gap-2.5 [&>div]:rounded-md text-white font-normal text-base select-none">
            {/* <SignInButton /> */}
            <Link href="/">
                <SignedOut>
                    <Avatar className="h-11 w-11 rounded-full">
                        <AvatarImage src="https://utfs.io/f/Oh8i40xmirDWbu2TuklWaKmyDpkdFURQ3uSqr81jienxCsNL" />
                        <AvatarFallback>
                            <Skeleton className="w-11 h-11 rounded-full" />
                        </AvatarFallback>
                    </Avatar>
                </SignedOut>
                <SignedIn>
                    <UserButton appearance={{
                        elements: {
                            userButtonAvatarBox: {
                                width: '44px',
                                height: '44px',
                            }
                        }
                    }}
                    />
                </SignedIn>
            </Link>
            <div className="py-3 px-6 flex gap-6 flex-grow bg-black">
                <Link href="/">Home</Link>
                <Link href="#about">About Me</Link>
                <Link href="/work">Work</Link>
                <Link href="/blog">Blog</Link>
                <a target="_blank" href="https://www.example.com">Resume</a>
            </div>
            <div className="py-3 px-6 flex gap-3 items-center bg-black">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <p>Available for work</p>
            </div>
            <Link href="/contact" className="rounded-md py-3 px-6 gap-3 items-center bg-blue-600 hover:bg-blue-500 duration-100 active:ring-2 focus:ring-2 active:ring-blue-600 focus:ring-blue-600 active:ring-offset-2 focus:ring-offset-2">
                Contact Me
            </Link>
        </nav>
    )
}

{/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}