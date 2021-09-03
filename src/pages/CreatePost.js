import React, { useContext, useState } from "react";
import { GlobalContext } from "../store/Provider";
import CreatePostPage from "../components/CreatePost";
import createPost from "../store/actions/createPost";

const CreatePost = ({ history }) => {
	const [form, setForm] = useState({userId: 1});

	const { dispatch } = useContext(GlobalContext);

	const handleChange = ({ target: { name, value }}) => {
		setForm(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		createPost(form, dispatch)((data) => {
			setForm({ userId: 1 })
			if (data)
				history.push(`/post/${data.id}`, { data })
		})
	}

	return (
		<CreatePostPage form={form} onChange={handleChange} onSubmit={handleSubmit} />
	)
}

export default CreatePost;