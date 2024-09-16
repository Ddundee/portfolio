import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dhanush C.",
    description: "A portfolio website for Dhanush C.",
    authors: [{ name: "Dhanush C." }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
