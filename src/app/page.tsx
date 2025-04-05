import { ScrambleText } from "@/components/scramble-text";
import ProjectSection from "./_components/project-section";
import PageLayout from "./_components/page-layout";

export default function Home() {
    const ageYear = new Date(Date.now() - new Date("April 8, 2006 00:00:00 EST").getTime()).getUTCFullYear() - 1970;



    return (
        <PageLayout>
            <div>
                <h1 className="text-stone-100 text-xl font-bold mb-1 min-h-7 w-full">
                    {"hi, i am "}
                    <ScrambleText minors="dhanush r. chilakala" />
                </h1>
                <p className="text-stone-400">cs + cmda @ vt</p>
                <p className="text-stone-400">based in blacksburg, va</p>
            </div>

            <p className='text-stone-300'>i&apos;m a {ageYear} y/o student at virginia tech. recently, i&apos;ve been reading &quot;c programming: a modern approach&quot; by k. n king. did i mention?.. i use arch linux btw.</p>

            <ProjectSection />
        </PageLayout>
    );
}