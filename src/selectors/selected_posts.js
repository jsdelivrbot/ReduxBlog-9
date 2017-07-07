import _ from 'lodash';
import { createSelector } from 'reselect';

const postsSelector = state => state.posts;
const selectedPostSelector = state => state.selectedPostsIds;

const getPosts = (posts, selectedPostsIds) => {
	const selectedPosts = _.filter(
		posts,
		post => _.contains(selectedPostsIds, post.id)
	);

	return selectedPosts;
};

export default createSelector(
	postsSelector,
	selectedPostSelector,
	getPosts
);
