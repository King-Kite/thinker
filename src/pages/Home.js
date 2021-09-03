import React, { useContext, useEffect} from "react";
import { GlobalContext } from "../store/Provider";
import HomePage from "../components/HomePage";
import getPosts from "../store/actions/getPosts";
import getAuthors from "../store/actions/getAuthors";

const Home = () => {
	const {
		dispatch,
		state: { authors, posts },
	} = useContext(GlobalContext);
	const limit = 6;

	useEffect(() => {
		getPosts(limit, dispatch)(() => getAuthors(dispatch));
	}, []);

	return (
		<HomePage
			loadingAuthor={authors.loading}
			loadingPost={posts.loading}
			posts={posts.data}
		/>
	);
};

export default Home;
