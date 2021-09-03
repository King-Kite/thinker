import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Textarea from "../common/Textarea";

const Form = ({ form, error, onChange, onSubmit }) => (
	<div className="px-5 md:px-12 lg:px-18 my-3">
		<h1 className="text-gray-700 italic font-semibold text-3xl text-left px-4 md:my-2">
			Leave a Reply
		</h1>
		<div className="px-4">
			<form onSubmit={onSubmit} className="flex flex-col md:w-3/4 lg:w-2/3">
				<Input
					className="my-3"
					error={error?.name}
					name="name"
					onChange={onChange}
					placeholder="Your Name"
					type="text"
					value={form.name || ""}
				/>
				<Input
					className="my-3"
					error={error?.email}
					name="email"
					onChange={onChange}
					placeholder="Your Email"
					type="email"
					value={form.email || ""}
				/>
				<Textarea
					className="my-3"
					error={error?.body}
					name="body"
					onChange={onChange}
					placeholder="Your Comment"
					value={form.body || ""}
				/>
				<Button className="my-3" title="Post Your Comment" />
			</form>
		</div>
	</div>
);

export default Form;
