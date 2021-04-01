import {
  FETCH_SERVICE_DETAILS_REQUEST,
  FETCH_SERVICE_DETAILS_FAILURE,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
} from './actionTypes';

export const fetchServiceDetailsRequest = (id) => ({
  type: FETCH_SERVICE_DETAILS_REQUEST,
  payload: { id },
});

export const fetchServiceDetailsFailure = (error) => ({
  type: FETCH_SERVICE_DETAILS_FAILURE,
  payload: { error },
});

export const fetchServiceDetailsSuccess = (item) => ({
  type: FETCH_SERVICE_DETAILS_SUCCESS,
  payload: { item },
});

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: { error },
});

export const fetchServicesSuccess = (items) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: { items },
});
/*
export const fetchServiceDetails = (id) => async (dispatch) => {
  dispatch(fetchServiceDetailsRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchServiceDetailsSuccess(data));
  } catch (e) {
    dispatch(fetchServiceDetailsFailure(e.message));
  }
}
/*
export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}
*/