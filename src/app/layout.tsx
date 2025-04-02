import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

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
            <body className={`${atkinson.className} tracking-wide antialiased bg-stone-950 selection:bg-orange-600/50`}>
                {children}
            </body>
        </html>
    );
}
