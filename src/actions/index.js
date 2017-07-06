import axios from 'axios';

import { FETCH_POSTS, CREATE_POST, URL_POSTS } from '../constants/constants';

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
