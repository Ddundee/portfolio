"use client";

import { Toaster } from "react-hot-toast";

import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import PageTemplate from "../../components/pageTemplate";
import BlogLink from "../../components/blogLink";
import blogContent from './../../util/blogContent'



export default function Home() {

    return (
        <PageTemplate>
            <div className="w-full h-full flex justify-center align-middle font-geist_sans">
                <Toaster
                    position="bottom-left"
                    reverseOrder={false}
                    toastOptions={{
                        style: {
                            background: "none",
                            boxShadow: "none",
                            padding: "0",
                            margin: "0",
                            border: "none",
                        },
                    }}
                />
                <div className="w-full md:w-3/6 px-4 text-[#170202]">
                    <div className="">
                        <NavBar />
                        <h1 className="text-2xl md:text-3xl font-semibold mb-6">My blog</h1>
                        <div className="flex flex-col gap-6">
                            {blogContent.map((blog) => <BlogLink title={blog.name} />)}
                        </div>
                        <div className="w-full h-8 md:h-11" />
                        <Footer />
                    </div>

                </div>
            </div>
        </PageTemplate >
    );
}
