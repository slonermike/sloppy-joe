import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from "redux";
import { StoreState } from './types';
import { enthusiasm } from './reducers';

import { Provider } from 'react-redux';
import { SiteAction } from './actions';
import SiteHeader from './containers/SiteHeader';
import Blog from './containers/Blog';

const store = createStore<StoreState, SiteAction, any, any>(enthusiasm, {
  siteTitle: 'SloppyJoe'
});

ReactDOM.render(
  <Provider store={store}>
    <SiteHeader />
    <Blog />
  </Provider>,
  document.getElementById('root') as HTMLElement
)