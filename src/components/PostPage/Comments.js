import React from "react";

const Comments = ({ comments, loading }) => (
	<div className="px-5 md:px-12 lg:px-18 my-3">
			<h1 className="text-gray-700 italic font-semibold text-3xl text-left px-4 md:my-2">
				{loading ? (
					<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
				) : (
					`${comments?.length || 0} Comments`
				)}
			</h1>
			<div className="px-5">
				{!loading ? (
					comments?.map((comment) => (
						<div key={`comment.id${comment.email + comment.body.slice(0, 4)}`} className="my-4">
							<h5
								href="#"
								className="text-gray-700 capitalize font-semibold hover:text-gray-900"
							>
								{comment.email}
							</h5>
							<span className="text-gray-600 italic">Jan 1, 2020</span>
							<p className="md:w-3/4 capitalize">{comment.body}</p>
						</div>
					))
				) : (
					<>
						<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
						<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
						<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
						<div className="animate-pulse h-6 bg-gray-600 rounded w-full" />
					</>
				)}
			</div>
		</div>

)

export default Comments;