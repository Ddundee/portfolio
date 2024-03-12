"use client";

import { useState } from "react";
import Link from "next/link";
import { titleCase } from "title-case";

export default function BlogLink({ blog }) {
	if (!blog.title) {
		blog.title = "Untitled";
		blog.id = "/404";
	}
	const incrementViews = async () => {
		try {
			const response = await fetch("api/increment_views/" + blog.name);
			const data = await response.json();
			
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return (
		<div
			className="hover:opacity-65 duration-500"
			onClick={incrementViews}
		>
			<Link href={"/blog/" + blog._id}>
				<h1 className="text-xl md:text-2xl font-light">
					{titleCase(blog.name.split("-").join(" "))}
				</h1>
				<p>{blog.views} views</p>
			</Link>
		</div>
	);
}
