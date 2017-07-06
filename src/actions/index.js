import Firebase from 'firebase';

import { 
	FETCH_POSTS,
	CREATE_POST, 
	FETCH_POST, 
	DELETE_POST, 
	FIREBASE_CONFIG
} from '../constants/constants';

Firebase.initializeApp(FIREBASE_CONFIG);
const database = Firebase.database();
const databaseRef = database.ref();

export function fetchPosts() {
	return dispatch => {
		databaseRef.on('value', snapshot => {
			dispatch({
				type: FETCH_POSTS,
				payload: snapshot.val()
			});
		});	
	};
}

export function createPost(values, callback) {
	return (dispatch) => {
		const newKey = databaseRef.child('posts').push().key;
		const post = values;

		const updates = {};
		post.id = newKey;
		updates[`/posts/${newKey}`] = post;
		databaseRef.update(updates);
		dispatch({ type: CREATE_POST, payload: post });

		callback();
	};
}

export function fetchPost(id) {
	return (dispatch) => {
		database.ref(`/posts/${id}`).once('value').then(snapshot => {
			const post = snapshot.val();
			post.id = id;
			dispatch({ type: FETCH_POST, payload: post });
		});
	};
}

export function deletePost(id, callback) {
	return (dispatch) => {
		database.ref(`/posts/${id}`).remove();
		dispatch({ type: DELETE_POST, payload: id });
		callback();
	};
}
