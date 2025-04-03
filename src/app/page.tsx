import { ScrambleText } from "@/components/scramble-text";
import ProjectSection from "./_components/ProjectSection";

export default function Home() {
    const ageYear = new Date(Date.now() - new Date("April 8, 2006 00:00:00 EST").getTime()).getUTCFullYear() - 1970;



    return (
        <div className="w-screen min-h-screen flex justify-between flex-col items-center py-14 px-4">
            <main className="w-full max-w-screen-md space-y-9">
                <div>
                    <h1 className="text-stone-100 text-xl font-bold mb-1 min-h-7 w-full">
                        {"hi, i am "}
                        <ScrambleText minors="dhanush r. chilakala" />
                    </h1>
                    <p className="text-stone-400">cs + cmda @ vt</p>
                    <p className="text-stone-400">based in blacksburg, tx</p>
                </div>

                <p className='text-stone-300'>i&apos;m a {ageYear} y/o student at virginia tech. recently, i&apos;ve been reading &quot;c programming: a modern approach&quot; by k. n king. did i mention?.. i use arch linux btw.</p>

                <ProjectSection />

            </main >

            <footer className="w-full max-w-screen-md flex gap-4 mt-9">
                <a className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" target="_blank" href="mailto:dhanushc@vt.edu">email</a>
                <a className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" target="_blank" href="https://www.github.com/ddundee">github</a>
                <a className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" target="_blank" href="https://www.linkedin.com/in/dhanush-chilakala/">linkedin</a>
                {/* <p className="no-underline">krishna likes minors</p> */}
            </footer>
        </div >
    );
}