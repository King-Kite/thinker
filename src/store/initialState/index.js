const InitialState = {
	comment: {
		data: {},
		error: null,
		loading: false,
	},
	comments: {
		data: [],
		error: false,
		loading: false,
	},
	posts: {
		data: [],
		error: null,
		loading: false,		
	},
	post: {
		data: {},
		error: null,
		loading: false,
	},
	authors: {
		data:[],
		error: null,
		loading: false,
	},
	singleAuthor: {
		data: {},
		error: null,
		loading: false,
	},
	singlePost: {
		data: {},
		error: null,
		loading: false,
	},
	createPost: {
		data: {},
		error: null,
		loading: false
	},
	deletePost: {
		data: {},
		error: null,
		loading: false
	},
}

export default InitialState;