import _ from 'lodash';

import { SELECT_POST } from '../constants/constants';

export default function (state = [], action) {
	switch (action.type) {
		case SELECT_POST: {
			const id = action.payload;
			if (_.indexOf(state, id) === -1) {
				return [id, ...state];
			} 

			return _.without(state, id);
		} 

		default:
			return state;
	}
}
