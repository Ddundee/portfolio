import { GithubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
    return (
        <div>
            <div className="bg-neutral-200 rounded-md w-full p-4">
                After multiple iterations, I found <a href="https://www.cursor.com/" target="_blank" className="cursor-pointer text-blue-500 hover:text-blue-700 hover:underline">Cursor.com</a> (and kinda just copied their website). They are absolutely amazing and I highly recommend paying for their AI Code Editor.
            </div>
            <div className="w-full h-2.5" />
            <div className='bg-black flex w-full text-white py-4 px-4 rounded-md justify-between'>
                <p>© {new Date().getFullYear()} Dhanush Reddy Chilakala.</p>
                <div className="flex gap-4 [&>*]:duration-100">
                    <a href="mailto:dhanushc@vt.edu" className="underline underline-offset-2">dhanushc@vt.edu</a>
                    <a href="https://github.com/Ddundee" target="_blank"><GithubIcon /></a>
                    <a href="https://linkedin.com/in/dhanush-chilakala" target="_blank"><LinkedInIcon /></a>
                </div>
            </div>
        </div>
    )
}

// #f5f5f5
