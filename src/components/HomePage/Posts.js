import React from "react";
import { NavLink } from "react-router-dom";

const Posts = ({ loadingAuthor, loadingPost, posts }) =>
	!loadingPost ? (
		posts?.map((post) => (
			<div key={post.title} className="px-2 my-3 w-7/8 md:w-1/2 lg:w-1/3">
				<img className="rounded" src="/assets/images/hero.jpg" alt="post1" />
				<div className="px-1">
					<NavLink
						to={`/post/${post.id}`}
						className="capitalize text-gray-600 underline text-2xl italic hover:text-gray-700"
					>
						{post.title}
					</NavLink>
					<div className="flex my-2">
						<div className="flex items-center mr-2 lg:mr-0 w-2/4">
							<i className="fas fa-user text-orange-400"></i>
							<span className="text-gray-800 mx-2 md:mx-1 w-full">
								{loadingAuthor ? (
									<div className="animate-pulse h-4 bg-gray-600 rounded w-full" />
								) : (
									post.author?.name || "Anonymous"
								)}
							</span>
						</div>
						<div className="mr-2 lg:mr-0">
							<i className="fas fa-clock text-orange-400"></i>
							<span className="text-gray-800 mx-2 md:mx-1">
								{post.data || "Jan 1, 2020"}
							</span>
						</div>
					</div>
					<div className="mb-4">
						<p className="text-gray-800 text-left">
							{post.body.slice(0, 50) ||
								`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat...`}
						</p>
					</div>
					<div className="mb-3">
						<NavLink
							to={`/post/${post.id}`}
							className="bg-orange-400 hover:bg-orange-700 text-gray-200 hover:text-gray-100 rounded px-4 py-2"
						>
							Read More
						</NavLink>
					</div>
				</div>
			</div>
		))
	) : (
		<h1>LOADING POSTS</h1>
	);

export default Posts;
