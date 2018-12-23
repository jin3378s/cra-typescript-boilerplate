import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux' 
import App from "./App";
import logger from 'redux-logger'
import rootReducers from './reducers'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducers,
  applyMiddleware(logger)
)
// sagaMiddleware.run(rootSaga)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root') as HTMLElement);
