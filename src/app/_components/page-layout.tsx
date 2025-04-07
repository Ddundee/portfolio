import React, { ReactNode } from 'react'
// import Navbar from './navbar'
import Footer from './footer'

type Props = {
    children: ReactNode[] | ReactNode
}

export default function PageLayout({ children }: Props) {
    return (
        <div className='min-h-screen flex justify-between flex-col pb-14 items-center'>
            <div className="w-screen flex gap-9 flex-col items-center py-14 px-4">
                {/* <Navbar /> */}
                <main className="w-full max-w-screen-md space-y-9">
                    {children}
                </main >

            </div >
            <Footer />
        </div>
    )
}