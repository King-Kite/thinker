import React from "react";
import Layout from "../Layout";
import Comments from "./Comments";
import Detail from "./Detail";
import Form from "./Form";

const Post = ({
	author,
	comments,
	commentError,
	form,
	handleChange,
	handleSubmit,
	loadingAuthor,
	loadingComments,
	loadingPost,
	post,
}) => (
	<Layout>
		{/* Post Title Start */}
		<div className="my-4 md:my-2 lg:my-1 w-full px-8">
			<h1 className="capitalize text-gray-700 italic font-semibold text-4xl text-center">
				{loadingPost ? (
					<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
				) : (
					post?.title
				)}
			</h1>
		</div>
		<div className="flex justify-center my-1 p-4">
			<img className="md:w-5/6" src="/assets/images/hero.jpg" alt="hero" />
		</div>
		{/* Post Title Stop */}

		<Detail 
			author={author}
			comments={comments}
			loadingAuthor={loadingAuthor}
			loadingComments={loadingComments}
			loadingPost={loadingPost}
			post={post}
		/>

		<Comments 
			comments={comments}
			loading={loadingComments}
		/>

		
		<Form 
			error={commentError}
			form={form}
			onChange={handleChange}
			onSubmit={handleSubmit} 
		/>
	</Layout>
);

export default Post;
