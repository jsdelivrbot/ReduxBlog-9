import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import SelectedPosts from './reducer_selected_posts';

const rootReducer = combineReducers({
	selectedPostsIds: SelectedPosts,
	posts: PostsReducer,
	form: formReducer
});

export default rootReducer;
