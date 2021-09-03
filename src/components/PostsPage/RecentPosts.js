import React from "react";
import { NavLink } from "react-router-dom";

const RecentPosts = ({ loading, posts }) => (
	<div className="px-5">
		{!loading ? (
			posts?.map((post) => (
				<div key={post.title} className="flex my-3">
					<img className="w-1/5" src="/assets/images/hero.jpg" />
					<div className="ml-4">
						<NavLink
							to={`/post/${post.id}`}
							className="block capitalize text-gray-700 underline hover:text-gray-900"
						>
							{post.title}
						</NavLink>
						<span className="text-gray-600 italic">Jan 1, 2020</span>
					</div>
				</div>
			))
		) : (
			<h1>LOADING RECENT POSTS!</h1>
		)}
	</div>
);

export default RecentPosts;
