"use client";

import { useState } from "react";
import Link from "next/link";



export default function BlogLink({title, href, views}) {

    if(!title) {
        title = 'Untitled';
        href = '/404';
    }
    else if(!href) {
        href = "/blog/" + title.toLowerCase().split(' ').join('-');
    }


    const incrementViews = async () => {
        try {
          const response = await fetch("/api/increment-views", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: href }),
          });
    
          if (response.ok) {
            const updatedBlog = await response.json();
            setCount(updatedBlog.views);    
          } else {
            console.error("Error incrementing views:", response.status);
          }
        } catch (error) {
          console.error("Error incrementing views:", error);
        }
      };
    

    return (
        <div className="hover:opacity-65 duration-500" onClick={incrementViews}>
            <Link href={href}>
                <h1 className="text-xl md:text-2xl font-light">{title}</h1>
                <p>{views} views</p>
            </Link>
        </div>
    );
}
