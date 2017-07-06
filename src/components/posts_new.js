import _ from 'lodash';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

const validateTitle = value => {
			if (!value) {
				return 'Enter a title!';
			} else if (value.length < 3) {
				return 'The title needs at least 3 characters.';
			}
};

const validateCategories = value => {
	if (!value) {
		return 'Enter some categories!';
	}
};

const validateContent = value => {
	if (!value) {
		return 'Enter some content!';
	}
};

const FIELDS = {
	title: {
		type: 'input',
		label: 'Title',
		validation: validateTitle
	},
	categories: {
		type: 'input',
		label: 'Categories',
		validation: validateCategories
	},
	content: {
		type: 'textarea',
		label: 'Post contents',
		validation: validateContent
	}
};

class PostsNew extends Component {
	onSubmit(values) {
		this.props.createPost(values, () => this.props.history.push('/'));
	}

	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label htmlFor={field.name}>{field.label}</label>
				<field.type
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	renderFields() {
		return _.map(FIELDS, (fieldConfig, fieldName) => 
			(
				<Field
					key={fieldName}
					name={fieldName}
					label={fieldConfig.label}
					type={fieldConfig.type}
					component={this.renderField}
				/>
			)
		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					{this.renderFields()}
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/" className="btn btn-danger">Cancel</Link>
				</form>
			</div>
		);
	}
}


function validate(values) {
	const errors = {};

	_.each(FIELDS, (config, field) => {
		errors[field] = config.validation(values[field]);
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm',
	fields: _.keys(FIELDS)
})(
	connect(null, { createPost })(PostsNew)
);
