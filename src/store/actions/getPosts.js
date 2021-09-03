import axios from "./axiosInstance";
import * as actions from "../actionTypes";

const getPosts = (limit, dispatch) => (onSuccess) => {
	dispatch({ type: actions.GET_POST_LOADING })

	axios.get(`/posts${limit ? `?_limit=${limit}` : ""}`)
	.then((res) => {
		dispatch({
			type: actions.GET_POST_SUCCESS,
			payload: res.data
		})
		onSuccess && onSuccess();
	})
	.catch((error) => {
		dispatch({
			type: actions.GET_POST_FAILED,
			payload: error.response ? error.response.data : { error: "Something Went Wrong!" }
		})
	})
}

export default getPosts;

// const getPosts = async (limit, dispatch) => (onSuccess) => {
// 	dispatch({ type: actions.GET_POST_LOADING })

// 	try {
// 		let res = await axios.get(`/posts${limit ? `?_limit=${limit}` : ""}`);
// 		let data = res.data;
// 		dispatch({
// 			type: actions.GET_POST_SUCCESS,
// 			payload: res.data
// 		})
// 		if (data) onSuccess && onSuccess();
// 	} catch (error) {
// 		dispatch({
// 			type: actions.GET_POST_FAILED,
// 			payload: error.response ? error.response.data : { error: "Something Went Wrong!" }
// 		})
// 	}
// }

// export default getPosts;