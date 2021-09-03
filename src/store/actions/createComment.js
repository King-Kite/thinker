import axios from "./axiosInstance";
import * as actions from "../actionTypes";


const createComments = (id, data, dispatch) => (onSuccess) => {
	dispatch({ type: actions.CREATE_COMMENT_LOADING })

	axios.post(`/posts/${id}/comments/`, { ...data })
	.then((res) => {
		dispatch({
			type: actions.CREATE_COMMENT_SUCCESS,
			payload: res.data
		})
		onSuccess();
	})
	.catch((error) => {
		console.log(error.response.data)
		dispatch({
			type: actions.CREATE_COMMENT_FAILED,
			payload: error.response ? error.response.data : { error: "Something Went Wrong!" }
		})
	})
}

export default createComments;
