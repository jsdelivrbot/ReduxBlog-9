import axios from 'axios';

import { 
	FETCH_POSTS, 
	CREATE_POST, 
	FETCH_POST, 
	DELETE_POST, 
	URL_POSTS, 
	URL_POST 
} from '../constants/constants';

export function fetchPosts() {
	const request = axios.get(URL_POSTS);
	
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback) {
	const request = axios
		.post(URL_POSTS, values)
		.then(() => callback())
	;

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(URL_POST(id));

	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id, callback) {
	const request = axios
		.delete(URL_POST(id))
		.then(() => callback())
	;

	return {
		type: DELETE_POST,
		payload: request
	};
}
