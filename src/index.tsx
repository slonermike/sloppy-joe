import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from "redux";
import { StoreState } from './types';
import { enthusiasm } from './reducers';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasm: 1,
  language: 'TypeScript'
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
)