import { createStore, compose  } from 'redux';
import reducer from './reducers/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
const store = createStore(reducer, composeEnhancers());
export default store;