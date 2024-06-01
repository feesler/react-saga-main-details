import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
} from '../actions/actionTypes.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case FETCH_SERVICES_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }

    case FETCH_SERVICES_SUCCESS: {
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    }

    default:
      return state;
  }
}
