import React from "react";
import { NavLink } from "react-router-dom";

const Posts = ({ loadingAuthor, loadingPost, posts }) =>
	!loadingPost ? (
		posts?.map((post) => (
			<div key={post.title} className="px-3 my-5">
				<img className="rounded" src="/assets/images/hero.jpg" alt="post1" />
				<div className="px-1">
					<NavLink
						to={`/post/${post.id}`}
						className="text-gray-600 capitalize underline text-2xl italic hover:text-gray-700"
					>
						{post.title}
					</NavLink>
					<div className="flex my-2">
						<div className="mr-2">
							<i className="fas fa-user text-orange-400"></i>
							<span className="text-gray-800 mx-2">
								{loadingAuthor ? (
									<div className="animate-pulse h-4 bg-gray-600 rounded w-full" />
								) : (
									post.author?.name || "Anonymous"
								)}
							</span>
						</div>
						<div className="mr-2">
							<i className="fas fa-clock text-orange-400"></i>
							<span className="text-gray-800 mx-2">Jan 1, 2020</span>
						</div>
						<div className="mr-2">
							<i className="fas fa-comment-dots text-orange-400"></i>
							<span className="text-gray-800 mx-2">12 Comments</span>
						</div>
					</div>
					<div className="mb-4">
						<p className="text-gray-800 text-left">{post.body}</p>
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
