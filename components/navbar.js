import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-wrap my-12 md:my-24 text-xl md:text-2xl font-light gap-5 [&>a]:hover:text-opacity-5">
            <Link href="/">
                <p className="">home</p>
            </Link>
            <Link href="/work" className="">
                work
            </Link>
            {/* <Link href="/blog">blog</Link> */}

            <a
                target="_blank"
                href="https://drive.google.com/file/d/1q4tTF27m2pFdxWP0s7qeozUpbjWhLuUg/view?usp=sharing"
                className=""
            >
                resume &rarr;
            </a>
        </div>
    )
}