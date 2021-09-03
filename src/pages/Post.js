import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../store/Provider";
import PostPage from "../components/PostPage";
import createComment from "../store/actions/createComment";
import getAuthor from "../store/actions/getAuthor";
import getComments from "../store/actions/getComments";
import getPost from "../store/actions/getPost";

const Post = ({
	history,
	match: {
		params: { id },
	},
}) => {
	const [passedPost, setPassedPost] = useState(null);
	const context = useContext(GlobalContext);
	// Ran into some nasty UNDEFINED errors so couldn't destructure
	// Fix it. Turns out i forgot to handle the CREATE_POST actions in the reducer

	const [form, setForm] = useState({ postId: id });

	const handleChange = ({ target: { name, value } }) => {
		setForm((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createComment(id, form, context.dispatch)(() => setForm({ postId: id }));
	};

	useEffect(() => {
		if (history.location.state?.data) {
			setPassedPost(history.location.state?.data)
		} else if (id)
			getPost(
				id,
				context.dispatch
			)((userId) => {
				getAuthor(userId, context.dispatch);
				getComments(id, context.dispatch);
			})(() => history.push("/posts"));
	}, []);

	return (
		<PostPage
			author={context?.state?.singleAuthor?.data}
			comments={context?.state?.comments?.data}
			commentError={context?.state?.comment?.error}
			form={form}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			loadingAuthor={context?.state?.singleAuthor?.loading}
			loadingComments={context?.state?.comments?.loading}
			loadingPost={context?.state?.singlePost?.loading}
			post={passedPost || context?.state?.singlePost?.data}
		/>
	);
};

export default Post;
