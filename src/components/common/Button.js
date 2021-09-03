import React from "react";

const Button = ({ className, title }) => (
	<div className={className}>
		<button
			className="bg-orange-400 rounded-lg text-md font-semibold text-gray-900 pl-5 py-4 w-2/4 text-center hover:bg-orange-300 hover:text-gray-800 focus:outline-none"
			type="submit"
		>
			{ title }
		</button>
	</div>
)

export default Button;