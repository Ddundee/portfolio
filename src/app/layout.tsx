import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import RouterProgressBar from "@/components/router-progress-bar";

const atkinson = Atkinson_Hyperlegible({ weight: ['400'], subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
    title: "Dhanush C.",
    description: "Made with love <3.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${atkinson.className} tracking-wide antialiased bg-stone-950 selection:bg-orange-600/30`}>
                <RouterProgressBar />
                <Toaster closeButton className="bg-orange-300/5 backdrop-blur-md boder-orange-600 text-stone-100" />
                {children}
            </body>
        </html>
    );
}
