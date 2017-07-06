import axios from 'axios';

import { FETCH_POSTS, URL_POSTS_ALL } from '../constants/constants';

export function fetchPosts() {
	const request = axios.get(URL_POSTS_ALL);
	
	return {
		type: FETCH_POSTS,
		payload: request
	};
}
