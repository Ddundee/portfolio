export default function Home() {
    return (
        <div className="px-3 p-12 flex flex-col items-center h-full">
            <div className="max-w-screen-sm w-full space-y-6">
                <h1 className="font-bold text-lg">
                    Dhanush Chilakala
                </h1>
                <p>
                    I am a student at Virginia Tech, majoring in Computer Science & Data Science. I am also a frontend developer who codes dumb things in my free time.
                </p>
                <div>
                    <h2>
                        Things I&apos;ve worked on recently:
                    </h2>
                    <ul className="list-disc list-inside">
                        <li>
                            <a href="https://simply-invite.vercel.app/" target="_blank">
                                Simply Invite
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-3">
                    <a href="https://drive.google.com/file/d/1OAMRp2yjhf_e_t18RP0Ccc-ZOFM61G_s/view?usp=sharing" target="_blank">
                        Resume
                    </a>
                    <a href="https://github.com/Ddundee" target="_blank">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/dhanush-chilakala/" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}