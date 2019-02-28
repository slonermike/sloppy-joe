import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, Store } from "redux";
import { StoreState } from './types';
import { siteReducer } from './reducers';

import { Provider } from 'react-redux';
import { SiteAction, initializeArticleMetadata } from './actions';
import SiteHeader from './containers/SiteHeader';
import Blog from './containers/Blog';

const initialState: StoreState = {
    siteTitle: 'SloppyJoe',
    articles: []
}

const store: Store<StoreState, SiteAction> = createStore<StoreState, SiteAction, any, any>(siteReducer, initialState);
store.dispatch(initializeArticleMetadata());

ReactDOM.render(
  <Provider store={store}>
    <SiteHeader />
    <Blog />
  </Provider>,
  document.getElementById('root') as HTMLElement
)