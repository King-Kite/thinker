import axios from "./axiosInstance";
import * as actions from "../actionTypes";

const createPost = (data, dispatch) => (onSuccess) => {
	dispatch({ type: actions.CREATE_POST_LOADING });

	if (data)
		axios
			.post(`/posts/`, { ...data })
			.then((res) => {
				dispatch({
					type: actions.CREATE_POST_SUCCESS,
					payload: res.data,
				});
				onSuccess(res.data);
			})
			.catch((error) => {
				dispatch({
					type: actions.CREATE_POST_FAILED,
					payload: error.response
						? error.response.data
						: { error: "Something Went Wrong!" },
				});
			});
};

export default createPost;
