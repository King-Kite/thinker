import * as actions from "../actionTypes";

const reducer = (state, { type, payload }) => {
	switch (type) {

		case actions.CREATE_COMMENT_FAILED:
			return {
				...state,
				comment: {
					error: payload,
					loading: false,
				},
			};

		case actions.CREATE_COMMENT_LOADING:
			return {
				...state,
				comment: {
					error: null,
					loading: true,
				},
			};

		case actions.CREATE_COMMENT_SUCCESS:
			const newComments = state?.comments?.data ?
				[...state.comments.data, {...payload }] : [{...payload}]

			return {
				...state,
				comment: {
					data: payload,
					error: null,
					loading: false,
				},
				comments: {
					data: newComments
				},
			};

		case actions.CREATE_POST_FAILED:
			return {
				...state,
				post: {
					error: payload,
					loading: false,
				},
			};

		case actions.CREATE_POST_LOADING:
			return {
				...state,
				post: {
					error: null,
					loading: true,
				},
			};

		case actions.CREATE_POST_SUCCESS:
			const newPost = state?.posts?.data ?
				[{ ...payload }, ...state.posts.data] : [{...payload}]

			return {
				...state,
				post: {
					data: payload,
					error: null,
					loading: false,
				},
				posts: {
					data: newPost
				},
			};

		case actions.GET_AUTHOR_FAILED:
			return {
				...state,
				authors: {
					error: payload,
					loading: false,
				},
			};

		case actions.GET_AUTHOR_LOADING:
			return {
				...state,
				author: {
					error: null,
					loading: true,
				},
			};

		case actions.GET_AUTHOR_SUCCESS:
			const {
				posts: { data },
			} = state;
			const newPosts = data?.map((post) => {
				const author = payload.filter(
					(user) => user.id === post.userId && user
				)[0];
				return {
					...post,
					author,
				};
			});

			return {
				...state,
				authors: {
					data: payload,
					error: null,
					loading: false,
				},
				posts: {
					data: newPosts,
				},
			};

		case actions.GET_COMMENT_FAILED:
			return {
				...state,
				comments: {
					error: payload,
					loading: false,
				},
			};

		case actions.GET_COMMENT_LOADING:
			return {
				...state,
				comments: {
					error: null,
					loading: true,
				},
			};

		case actions.GET_COMMENT_SUCCESS:
			return {
				...state,
				comments: {
					data: payload,
					error: null,
					loading: false,
				},
			};

		case actions.GET_POST_FAILED:
			return {
				...state,
				posts: {
					error: payload,
					loading: false,
				},
			};

		case actions.GET_POST_LOADING:
			return {
				...state,
				posts: {
					error: null,
					loading: true,
				},
			};

		case actions.GET_POST_SUCCESS:
			return {
				...state,
				posts: {
					data: payload,
					error: null,
					loading: false,
				},
			};

		case actions.GET_SINGLE_AUTHOR_FAILED:
			return {
				...state,
				singleAuthor: {
					error: payload,
					loading: false,
				},
			};

		case actions.GET_SINGLE_AUTHOR_LOADING:
			return {
				...state,
				singleAuthor: {
					error: null,
					loading: true,
				},
			};

		case actions.GET_SINGLE_AUTHOR_SUCCESS:
			return {
				...state,
				singleAuthor: {
					data: payload,
					error: null,
					loading: false,
				},
			};

		case actions.GET_SINGLE_POST_FAILED:
			return {
				...state,
				singlePost: {
					error: payload,
					loading: false,
				},
			};

		case actions.GET_SINGLE_POST_LOADING:
			return {
				...state,
				singlePost: {
					error: null,
					loading: true,
				},
			};

		case actions.GET_SINGLE_POST_SUCCESS:
			return {
				...state,
				singlePost: {
					data: payload,
					error: null,
					loading: false,
				},
			};
	}
};

export default reducer;
