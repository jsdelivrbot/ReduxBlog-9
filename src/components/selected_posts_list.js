import React from 'react';
import { connect } from 'react-redux';

import SelectedPostsSelector from '../selectors/selected_posts';

const SelectedPostsList = (props) => {
	if (!props.posts.length) {
		return <div>Click on a post to select it.</div>;
	}

	const posts = props.posts.map(post => 
		<li className="list-group-item" key={post.id}>{post.title}</li> 
	);

	return (
		<ul className="list-group">
			{posts}
		</ul>
	);
};


const mapStateToProps = (state) => {
	const posts = SelectedPostsSelector(state);
	return { posts };
};

export default connect(mapStateToProps)(SelectedPostsList);
