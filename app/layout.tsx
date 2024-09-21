import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./_components/navbar";
import { Be_Vietnam_Pro as BeVietnamPro } from 'next/font/google'
import Footer from "./_components/footer";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Toaster } from "sonner";


export const metadata: Metadata = {
    title: "Dhanush C.",
    description: "A portfolio website for Dhanush C.",
    authors: [{ name: "Dhanush C." }],
};

const beVietnamPro = BeVietnamPro({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${beVietnamPro.className} antialiased py-5 px-3 flex gap-2.5 flex-col selection:bg-blue-400/70 leading-normal h-[1000px]`}
            >
                <Toaster />
                <DropdownMenu>
                    <NavBar />
                    {children}
                    <Footer />
                    <DropdownMenuContent>
                        <DropdownMenuItem><Link href="/">Home</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href="/#about">About Me</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href="/work">Work</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href="/blog">Blog</Link></DropdownMenuItem>
                        <DropdownMenuItem><a target="_blank" href="https://drive.google.com/file/d/1OAMRp2yjhf_e_t18RP0Ccc-ZOFM61G_s/view?usp=sharing">Resume</a></DropdownMenuItem>
                        <DropdownMenuItem><Link href="/">Contact Me</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </body>
        </html>
    );
}
