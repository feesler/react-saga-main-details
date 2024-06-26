import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import serviceListReducer from '../reducers/serviceList.js';
import serviceDetailsReducer from '../reducers/serviceDetails.js';
import saga from '../sagas/index.js';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceDetails: serviceDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(saga);

export default store;
