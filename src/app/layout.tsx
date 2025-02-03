import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});


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
        <html lang="en" className="bg-blue-700">
            <body className={`${beVietnamPro.className} antialiased border-t-8 border-blue-700 w-screen min-h-screen bg-white`}>
                {/* <p className="">{JSON.stringify(session)}</p> */}
                {children}
            </body>
        </html>
    );
}
