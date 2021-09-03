import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Textarea from "../common/Textarea";

const Form = ({ error, form: { body, title }, onChange, onSubmit }) => (
	<form onSubmit={onSubmit} className="flex flex-col">
		<Input 
			className="my-3"
			error={error?.title}
			label="Author"
			name="title"
			onChange={onChange}
			placeholder="Enter Your Name"
			value={title || ""}
		/>
		<Textarea 
			className="my-3"
			error={error?.body}
			label="Post"
			name="body"
			onChange={onChange}
			placeholder="Type in your post..."
			value={body || ""}
		/>
  	<Button className="my-3" title="Create Post" />
	</form>
)

export default Form;