import axios from "axios";

const BACKEND_URL = "https://jsonplaceholder.typicode.com"

const instance = axios.create({
	baseURL: BACKEND_URL
});

export default instance