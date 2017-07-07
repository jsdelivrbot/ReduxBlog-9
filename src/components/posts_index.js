import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts, selectPost } from '../actions';
import SelectedPostsList from './selected_posts_list';

class PostsIndex extends Component {
	componentDidMount() {
		if (!this.props.post) {
			this.props.fetchPosts();
		}
	}

	renderPosts() {
		return _.map(this.props.posts, post => 
			<li className="list-group-item" key={post.id}>
				<Link to={`/post/${post.id}`}>
					{post.title}
				</Link>
				<input 
					type="checkbox" 
					className="pull-xs-right" 
					value={post.id} 
					onClick={(event) => this.props.selectPost(event)} 
				/> 
			</li>
		);
	}

	render() {
		const posts = 
			_.isEmpty(this.props.posts) ? 
			<div>There are no posts yet.</div> :
			this.renderPosts();

		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a Post
					</Link>
				</div>
				<h4>Selected Posts</h4>
				<SelectedPostsList />
				<hr />
				<h4>All Posts</h4>
				<ul className="list-group">
					{posts}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, selectPost })(PostsIndex);
