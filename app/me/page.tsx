"use client"
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CheckIfMe from '../util/checkIfMe'

export default function Page() {
    const isMe = CheckIfMe();

    return (
        <div className='w-full h-full border rounded-md p-4'>
            <SignedIn>
                {isMe ? (
                    <div>
                        <div className='font-medium text-lg mb-11'>
                            Welcome back, Dhanush!
                        </div>
                        <div className='flex gap-4 flex-wrap'>
                            <Card className='flex-grow'>
                                <CardHeader>
                                    <CardTitle>Canvas</CardTitle>
                                    <CardDescription>Check Assignments</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Coming Soon</p>
                                </CardContent>
                            </Card>
                            <Card className='flex-grow'>
                                <CardHeader>
                                    <CardTitle>Blog</CardTitle>
                                    <CardDescription>Checkout your recent blogs or write a new one!</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Coming Soon</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex justify-center items-center font-medium text-xl">
                        <p>This is akward but what are you doing here?</p>
                    </div>
                )}
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <div className='w-full h-full flex justify-center items-center'>
                        <Button>
                            Sign In
                        </Button>
                    </div>
                </SignInButton>
            </SignedOut>
        </div >
    )
}
