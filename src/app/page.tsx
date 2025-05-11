import { ScrambleText } from '@/components/scramble-text'
import PageLayout from './_components/page-layout'
import { Caveat } from 'next/font/google'

const caveat = Caveat({})

export default function Home() {
    const ageYear =
        new Date(
            Date.now() - new Date('April 8, 2006 00:00:00 EST').getTime()
        ).getUTCFullYear() - 1970

    return (
        <PageLayout>
            <div>
                <h1 className="mb-1 min-h-7 w-full text-xl font-bold text-stone-100">
                    {'hi, i am '}
                    <ScrambleText minors="dhanush r. chilakala" />
                </h1>
                <p className="text-stone-400">cs + cmda @ vt</p>
                <p className="text-stone-400">based in blacksburg, va</p>
            </div>
            <p className="text-stone-300">
                i&apos;m a {ageYear} y/o student at virginia tech. recently,
                i&apos;ve been reading <i>c programming: a modern approach</i>{' '}
                by k. n king.{' '}
                <span className="blur-xs duration-100 hover:blur-none">
                    did i mention?.. i use arch linux btw.
                </span>
                <span className={`${caveat.className} font-bold opacity-60`}>
                    {' '}
                    &larr; hover to unblur :)
                </span>
            </p>
            <div>
                <h1 className="mb-3 text-xl font-bold text-stone-100">plans</h1>
                <div className="group flex flex-col">
                    <ul>
                        <li>
                            <p className="text-stone-300">
                                <span className="select-none">✓ </span>read{' '}
                                <i>c programming: a modern approach</i> by k. n.
                                king
                            </p>
                        </li>
                        <li>
                            <p className="text-stone-300">
                                <span className="select-none">- </span> config
                                nvim ;(
                            </p>
                        </li>
                        <li>
                            <p className="text-stone-300">
                                <span className="select-none">- </span> read{' '}
                                <i>algorithms in c</i> by robert sedgewick
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="mb-3 text-xl font-bold text-stone-100">
                    projects
                </h1>
                <div className="group flex flex-col">
                    {/* <ProjectCard link="https://www.github.com/ddundee/simply-invite" name="simply invite" description="an easy, free way to share your event invitations." techologies={["typescript", "clerk auth", "tailwind css", "drizzle", "supabase"]} /> */}
                    <p className="text-stone-300">
                        so idk what to build... you should lmk!
                    </p>
                </div>
            </div>
        </PageLayout>
    )
}
