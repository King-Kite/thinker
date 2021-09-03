import React from "react";
import Layout from "../Layout";
import Posts from "./Posts";
import RecentPosts from "./RecentPosts";

const PostsPage = ({ loadingAuthor, loadingPost, posts }) => (
	<Layout>
		<div className="my-4 md:my-2 lg:my-1 w-full px-8">
      <h1 className="text-gray-700 italic font-semibold text-6xl text-center">
      	Posts
      </h1>
    </div>
    <div className="md:flex w-screen">
			<div className="md:w-2/3">
				<Posts loadingAuthor={loadingAuthor} loadingPost={loadingPost} posts={posts} />
	    </div>
	    <div className="md:w-1/3 pr-1">
	    	<h1 className="text-gray-700 italic font-semibold text-3xl text-left px-4 md:my-2">
	        Recent Posts
	      </h1>
	      <RecentPosts loading={loadingPost} posts={posts} />
	    </div>
	  </div>
	</Layout>
)

export default PostsPage;