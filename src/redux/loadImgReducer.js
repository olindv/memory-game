import {GET_IMG_REQUEST, GET_IMG_SUCCESS, GET_IMG_FAILURE} from './actions';

const initialState = {isLoading: false, images: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMG_REQUEST:
      return {...state, isLoading: true};
    case GET_IMG_SUCCESS:
      return {...state, isLoading: false, images: action.payload};
    case GET_IMG_FAILURE:
      return state;
    default:
      return state;
  }
};
