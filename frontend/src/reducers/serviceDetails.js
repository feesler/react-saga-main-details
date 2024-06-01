import {
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_FAILURE,
} from '../actions/actionTypes.js';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

export default function serviceDetailsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SERVICE_DETAILS_REQUEST:
      return {
        ...state,
        item: null,
        loading: true,
        error: null,
      };

    case FETCH_SERVICE_DETAILS_SUCCESS: {
      console.log('FETCH_SERVICE_DETAILS_SUCCESS ', payload);
      return {
        ...state,
        item: { ...payload.item },
        loading: false,
        error: null,
      };
    }

    case FETCH_SERVICE_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: { ...payload },
      };

    default:
      return state;
  }
}
