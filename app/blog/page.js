"use client";

import { Toaster } from "react-hot-toast";

import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import PageTemplate from "../../components/pageTemplate";
import QuoteCard from "../../components/quoteCard";

import BlogLink from "../../components/blogLink";
// import { MongoClient, ServerApiVersion } from "mongodb";
import blogContent from "../../util/blogContent";
import { useEffect, useState } from "react";
import { titleCase } from "title-case";


// export const revalidate = 0; // Mark this component as a Server Component



export default function Home() {
    const [blogs, setBlogs] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/blog");
          const data = await response.json();
          setBlogs(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
  
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
              <h1 className="text-2xl md:text-3xl font-semibold mb-6">
                My blog... Your not supposed to be here?
              </h1>
              <div className="flex flex-col gap-6">
                {blogs? blogs.map((blog) => (
                  <BlogLink key={blog.id} title={titleCase(blog.name.split('-').join(' '))} views={blog.views} />
                )) : blogContent.map((blog) => (
                    <BlogLink key={blog.id} title={titleCase(blog.name)} views={blog.views} />
                  ))}
              </div>
              <div className="w-full h-8 md:h-11" />
              <Footer />
            </div>
          </div>
        </div>
      </PageTemplate>
    );
  }