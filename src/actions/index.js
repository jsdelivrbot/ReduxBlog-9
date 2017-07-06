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
	
	return (dispatch) => {
		request.then(({ data }) => {
			dispatch({ type: FETCH_POSTS, payload: data });
		});
	};
}

export function createPost(values, callback) {
	const request = axios.post(URL_POSTS, values);
	
	return (dispatch) => {
		request.then(({ data }) => {
			callback();
			dispatch({ type: CREATE_POST, payload: data });
		});
	};
}

export function fetchPost(id) {
	const request = axios.get(URL_POST(id));
	
	return (dispatch) => {
		request.then(({ data }) => {
			dispatch({ type: FETCH_POST, payload: data });
		});
	};
}

export function deletePost(id, callback) {
	const request = axios.delete(URL_POST(id));
	
	return (dispatch) => {
		request.then(({ data }) => {
			callback();
			dispatch({ type: DELETE_POST, payload: data });
		});
	};
}
