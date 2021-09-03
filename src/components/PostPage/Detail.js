import React from "react";

const Detail = ({
	author,
	comments,
	loadingAuthor,
	loadingComments,
	loadingPost,
	post,
}) => (
	<div className="flex flex-col justify-center items-center py-1 md:px-3 lg:px-5">
		<div className="w-5/6 md:3/4">
			<h3 className="capitalize text-gray-700 italic font-semibold text-3xl text-center">
				{loadingPost ? (
					<div className="animate-pulse h-4 bg-gray-600 rounded w-full" />
				) : (
					post?.title
				)}
			</h3>
			<div className="flex justify-center my-2">
				<div className="mr-2">
					<i className="fas fa-user text-orange-400"></i>
					<span className="text-gray-800 mx-2">
						{loadingAuthor ? (
							<div className="animate-pulse h-4 bg-gray-600 rounded w-full" />
						) : (
							author?.name || "Anonymous"
						)}
					</span>
				</div>
				<div className="mr-2">
					<i className="fas fa-comment-dots text-orange-400"></i>
					<span className="text-gray-800 mx-2">
						{loadingComments ? (
							<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
						) : (
							`${comments?.length} Comments`
						)}
					</span>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<div>
					{loadingPost ? (
						<>
							<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
							<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
							<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
							<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
						</>
					) : (
						<p className="text-left">{post?.body}</p>
					)}
				</div>
			</div>
		</div>
	</div>
);

export default Detail;
