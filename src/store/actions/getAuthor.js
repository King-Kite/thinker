import axios from "./axiosInstance";
import * as actions from "../actionTypes";


const getAuthor = (id, dispatch) => {
	dispatch({ type: actions.GET_SINGLE_AUTHOR_LOADING })

	axios.get(`/users/${id}`)
	.then((res) => {
		dispatch({
			type: actions.GET_SINGLE_AUTHOR_SUCCESS,
			payload: res.data
		})
	})
	.catch((error) => {
		dispatch({
			type: actions.GET_SINGLE_AUTHOR_FAILED,
			payload: error.response ? error.response.data : { error: "Something Went Wrong!" }
		})
	})
}

export default getAuthor;