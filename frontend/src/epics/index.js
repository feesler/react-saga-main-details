import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import {
  map,
  debounceTime,
  switchMap,
  catchError,
  takeUntil,
} from 'rxjs/operators';
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICE_DETAILS_REQUEST,
} from '../actions/actionTypes';
import {
  fetchServiceDetailsSuccess,
  fetchServiceDetailsFailure,
  fetchServicesSuccess,
  fetchServicesFailure,
} from '../actions/actionCreators';

const servicesUrl = process.env.REACT_APP_API_URL;

export const requestServiceDetailsEpic = (action$) => action$.pipe(
  ofType(FETCH_SERVICE_DETAILS_REQUEST),
  map(o => o.payload.id),
  debounceTime(100),
  switchMap(o =>
    ajax.getJSON(`${servicesUrl}/${o}`).pipe(
      map(o => fetchServiceDetailsSuccess(o)),
      catchError(e => of(fetchServiceDetailsFailure(e))),
      takeUntil(action$.pipe(
        ofType(FETCH_SERVICES_REQUEST)
      )),
    )
  )
);

export const requestServicesEpic = (action$) => action$.pipe(
  ofType(FETCH_SERVICES_REQUEST),
  debounceTime(100),
  switchMap(() =>
    ajax.getJSON(servicesUrl).pipe(
      map(o => fetchServicesSuccess(o)),
      catchError(e => of(fetchServicesFailure(e))),
      takeUntil(action$.pipe(
        ofType(FETCH_SERVICE_DETAILS_REQUEST)
      )),
    )
  )
);
