export default function Home() {
    const ageYear = new Date(Date.now() - new Date("April 8, 2006 00:00:00 EST").getTime()).getUTCFullYear() - 1970;

    return (
        <div className="w-screen min-h-screen flex justify-between flex-col items-center py-14 px-4">
            <main className="w-full max-w-screen-md space-y-9">
                <div>
                    <h1 className="text-stone-100 text-xl font-bold mb-2">Dhanush Chilakala</h1>
                    <p className="text-stone-400">cs + cmda @ vt</p>
                    <p className="text-stone-400">based near blacksburg, tx</p>
                </div>

                <p className='text-stone-300'>i&apos;m a {ageYear} y/o student at vt. recently, i&apos;ve been reading &quot;c programming: a modern approach&quot; by k. n king. i also use arch linux btw.</p>

                <div>
                    <h1 className="text-stone-100 text-xl font-bold mb-3">Projects</h1>
                    <a className="no-underline" href="https://github.com/ddundee/simply-invite">
                        <div className="border rounded-sm border-stone-500 py-4 px-6 hover:signal hover:border-orange-600 duration-100 flex">
                            <div className="w-full">
                                <h2 className="font-bold text-lg text-stone-300">Simply Invite</h2>
                                <p className="text-stone-400 mb-4">an easy, free way to share your event invitations.</p>
                                <p className="font-bold text-stone-300 mb-1">technologies</p>
                                <div className="gap-3 flex flex-wrap">
                                    <p className="py-1 px-2 rounded-md text-stone-400 bg-stone-900">typescript</p>
                                    <p className="py-1 px-2 rounded-md text-stone-400 bg-stone-900">clerk</p>
                                    <p className="py-1 px-2 rounded-md text-stone-400 bg-stone-900">tailwind css</p>
                                    <p className="py-1 px-2 rounded-md text-stone-400 bg-stone-900">drizzle</p>
                                    <p className="py-1 px-2 rounded-md text-stone-400 bg-stone-900">supabase</p>
                                </div>
                            </div>
                            <svg className="text-stone-500 signal:text-orange-600" stroke="0.5" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>

                    </a>

                </div>
            </main >
            <footer className="w-full max-w-screen-md flex gap-4">
                <a className="no-underline text-stone-400 hover:text-orange-600" href="mailto:dhanushc@vt.edu">email</a>
                <a className="no-underline text-stone-400 hover:text-orange-600" href="https://www.github.com/ddundee">github</a>
                <a className="no-underline text-stone-400 hover:text-orange-600" href="https://www.linkedin.com/in/dhanush-chilakala/">linkedin</a>
            </footer>
        </div >
    );
}