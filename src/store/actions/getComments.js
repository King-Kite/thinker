import axios from "./axiosInstance";
import * as actions from "../actionTypes";


const getComments = (id, dispatch) => {
	dispatch({ type: actions.GET_COMMENT_LOADING })

	axios.get(`/posts/${id}/comments`)
	.then((res) => {
		dispatch({
			type: actions.GET_COMMENT_SUCCESS,
			payload: res.data
		})
	})
	.catch((error) => {
		dispatch({
			type: actions.GET_COMMENT_FAILED,
			payload: error.response ? error.response.data : { error: "Something Went Wrong!" }
		})
	})
}

export default getComments;
