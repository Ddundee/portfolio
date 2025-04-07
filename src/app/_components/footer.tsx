import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full max-w-screen-md flex gap-4 mt-9">
            <a className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" target="_blank" href="mailto:dhanushc@vt.edu">email</a>
            <a className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" target="_blank" href="https://www.github.com/ddundee">github</a>
            <a className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" target="_blank" href="https://www.linkedin.com/in/dhanush-chilakala/">linkedin</a>
            {/* <Link className="no-underline text-stone-400 hover:text-orange-600 py-1 px-2 rounded-sm hover:bg-orange-300/5" href="/contact">or just fill out this form</Link> */}
            <p className="no-underline cursor-default select-none">krishna likes minors</p>
        </footer>
    )
}
