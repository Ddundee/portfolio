import React, { ReactNode } from 'react'
import Navbar from './navbar'
import Footer from './footer'

type Props = {
    children: ReactNode[] | ReactNode
}

export default function PageLayout({ children }: Props) {
    return (
        <div className="relative min-h-screen flex justify-between flex-col pb-14 items-center">
                      <div className="noise-overlay" aria-hidden="true">
            <div className="noise" />
          </div>

          <div className="w-screen flex gap-9 flex-col items-center py-14 px-4 relative z-10">
                <div className="w-full h-12" />
            <main className="w-full max-w-screen-md space-y-9">
              {children}
            </main>
          </div>
          <Footer className="relative z-10" />
          
        </div>
      );
}
