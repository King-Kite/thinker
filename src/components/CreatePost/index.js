import React from "react";
import Layout from "../Layout";
import Form from "./Form";

const CreatePost = ({ form, onChange, onSubmit }) => (
	<Layout>
		<div className="my-4 md:my-2 lg:my-1 w-full px-8">
      <h1 className="text-gray-700 italic font-semibold text-4xl text-center">
      	Create New Post
      </h1>
    </div>

   	<div className="bg-orange-300 rounded-lg p-1 mx-2 flex flex-col md:flex-row-reverse">
	    <div className="flex justify-center my-1 p-4 md:p-2 md:px-1 md:w-1/3">
	      <img src="/assets/images/hero.jpg" alt="hero" />
	    </div>

	    <div className="px-5 my-3 md:w-2/3">
	    	<h1 className="text-gray-700 italic font-semibold text-3xl text-left px-4 md:my-2">
	        Create a New Post Below
	      </h1>
	      <div className="p-4">
	      	<Form form={form} onChange={onChange} onSubmit={onSubmit} />
	      </div>
	    </div>
    </div>

	</Layout>
)

export default CreatePost;