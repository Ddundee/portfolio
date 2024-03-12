"use client";
import { useEffect, useState } from "react";
import Footer from "../../../components/footer";
import NavBar from "../../../components/navbar";
import PageTemplate from "../../../components/pageTemplate";
import blogContent from "../../../util/blogContent";
import { useRouter } from "next/navigation";

export default function Page({ params }) {

  const [blogs, setBlogs] = useState(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/api/blog");
				const data = await response.json();
				setBlogs(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		})();
	}, []);

  console.log(blogContent)
  let blog = blogContent.find((element) => element._id === params.slug);

 

  if (blog)
    return (
      <PageTemplate>
        <div className="w-full h-full flex justify-center align-middle font-geist_sans">
          <div className="w-full md:w-3/6 px-4 text-[#170202]">
            <div className="">
              <NavBar />
              <h1 className="text-2xl md:text-3xl font-semibold mb-6">{blog.name}</h1>
              <p>{blog.content}</p>
              <div className="w-full h-8 md:h-11" />
              <Footer />
            </div>

          </div>
        </div>
      </PageTemplate >
    )
    else {
      const router = useRouter();
      router.push('/404');
    }
}