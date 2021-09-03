import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../store/Provider";
import PostsPage from "../components/PostsPage";
import getPosts from "../store/actions/getPosts";
import getAuthors from "../store/actions/getAuthors";

const Posts = () => {
	const {
		dispatch,
		state: { authors, posts },
	} = useContext(GlobalContext);

	const limit = 10;

	useEffect(() => {
		getPosts(limit, dispatch)(() => getAuthors(dispatch));
	}, []);

	return (
		<PostsPage 
			loadingAuthor={authors?.loading}
			loadingPost={posts?.loading}
			posts={posts?.data}
		/>
	)
}

export default Posts;
