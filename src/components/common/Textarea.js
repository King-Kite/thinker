import React from "react";

const Textarea = ({ className, error, label, ...props }) => (
	<div className={`flex flex-col ${className}`}>
		{label && <label className={`p-1 ${error ? "text-red-500" : "text-gray-800"}`} htmlFor="name">
				{label}
			</label>}
		<textarea
			className={`p-3 text-left text-gray-600 rounded-lg border-2 ${error ? "border-red-500" : "border-orange-300"} focus:border-orange-400 focus:bg-gray-100 outline-none`}
			{ ...props }
		/>
		{ error && <span className="capitalize text-red-500 mx-2">{error}</span> }
	</div>
)

export default Textarea;