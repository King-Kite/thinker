import React from "react";
import Layout from "../Layout";
import Posts from "./Posts";

const Home = ({ loadingAuthor, loadingPost, posts }) => (
	<Layout>
		<div className="my-4 md:my-2 lg:my-1 w-full px-8">
      <h1 className="text-gray-700 italic font-semibold text-6xl text-center">Thinker</h1>
      <div className="bg-gray-300 my-2 p-4">
        <img src="/assets/images/hero.jpg" alt="hero" />
      </div>
    </div>

    <main className="px-8">
      <h1 className="text-gray-700 italic font-semibold text-3xl text-left px-2">
        Posts
      </h1>
      <div className="flex flex-wrap">
        <Posts loadingAuthor={loadingAuthor} loadingPost={loadingPost} posts={posts} />
      </div>
    </main>
	</Layout>
)

export default Home;
