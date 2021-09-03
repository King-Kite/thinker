import axios from "./axiosInstance";
import * as actions from "../actionTypes";


const getPost = (id, dispatch) => (onSuccess) => (onError) => {
	dispatch({ type: actions.GET_SINGLE_POST_LOADING })

	axios.get(`/posts/${id}`)
	.then((res) => {
		dispatch({
			type: actions.GET_SINGLE_POST_SUCCESS,
			payload: res.data
		})
		onSuccess && onSuccess(res.data.userId);
	})
	.catch((error) => {
		dispatch({
			type: actions.GET_SINGLE_POST_FAILED,
			payload: error.response ? error.response.data : { error: "Something Went Wrong!" }
		})
		onError()
	})
}

export default getPost;
