import { Github, GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
    return (
        <div>
            <hr  className="border-black"/>
            <div className="my-6 flex justify-between">
            <p>website design inspired by <a href="https://leerob.io/" target="_blank" className="underline">Lee Robinson</a></p>
            <div className="flex gap-2">
                <a target="_blank" href="https://github.com/ddundee"><GithubIcon strokeWidth={1} /></a>
                <a target="_blank" href="https://www.linkedin.com/in/dhanush-chilakala/"><LinkedinIcon strokeWidth={1} /></a>
                <a href="mailto:dhanush.actual1@gmail.com"><Mail strokeWidth={1} /></a>
            </div>
        </div>
        </div>
    )
}