import { put, call, spawn, takeLatest, cancel, fork } from 'redux-saga/effects';
import {
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
  fetchServicesSuccess,
  fetchServicesFailure,
} from '../actions/actionCreators';
import { FETCH_SERVICES_REQUEST, FETCH_SERVICE_DETAILS_REQUEST } from '../actions/actionTypes';

const servicesUrl = process.env.REACT_APP_API_URL;

const requestServiceDetails = async (id) => {
  const response = await fetch(`${servicesUrl}/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

// worker
function* handleDetailsRequestSaga(action) {
  try {
    const data = yield call(requestServiceDetails, action.payload.id);
    yield put(fetchServiceDetailsSuccess(data));
  } catch (e) {
    yield put(fetchServiceDetailsFailure(e.message));
  }
}

const requestServices = async () => {
  const response = await fetch(servicesUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

// worker
function* handleServicesRequestSaga() {
  try {
    const data = yield call(requestServices);
    yield put(fetchServicesSuccess(data));
  } catch (e) {
    yield put(fetchServicesFailure(e.message));
  }
}

function* handleServiceRequest(action) {
  let task = null;

  if (task) {
    yield cancel(task);
  }

  if (action.type === FETCH_SERVICES_REQUEST) {
    task = yield fork(handleServicesRequestSaga, action);
  } else if (action.type === FETCH_SERVICE_DETAILS_REQUEST) {
    task = yield fork(handleDetailsRequestSaga, action);
  }
}

// watcher
function* watchServiceRequestSaga() {
  yield takeLatest(
    (action) => [FETCH_SERVICES_REQUEST, FETCH_SERVICE_DETAILS_REQUEST].includes(action.type),
    handleServiceRequest,
  );
}

export default function* saga() {
  yield spawn(watchServiceRequestSaga);
}
