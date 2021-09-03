import axios from "./axiosInstance";
import * as actions from "../actionTypes";


const getAuthors = (dispatch) => {
	dispatch({ type: actions.GET_AUTHOR_LOADING })

	axios.get('/users')
	.then((res) => {
		dispatch({
			type: actions.GET_AUTHOR_SUCCESS,
			payload: res.data
		})
	})
	.catch((error) => {
		dispatch({
			type: actions.GET_AUTHOR_FAILED,
			payload: error.response ? error.response.data : { error: "Something Went Wrong!" }
		})
	})
}

export default getAuthors;