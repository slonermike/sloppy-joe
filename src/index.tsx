import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, Store } from "redux";
import { StoreState } from './types';
import { siteReducer } from './reducers';

import { Provider } from 'react-redux';
import { SiteAction, initializeArticleMetadata, fetchArticle } from './actions';
import SiteHeader from './containers/SiteHeader';
import Blog from './containers/Blog';
import TagList from './containers/TagList';

const initialState: StoreState = {
    siteTitle: 'SloppyJoe',
    articles: {},
    articleOrder: [],
    tags: {},
    focusedTag: null
}

const store: Store<StoreState, SiteAction> = createStore<StoreState, SiteAction, any, any>(siteReducer, initialState);
store.dispatch(initializeArticleMetadata());

// Fetch the articles with a delay between.
const articleOrder = store.getState().articleOrder;
for (let index = 0; index < articleOrder.length; index++) {
    setTimeout(() => {
        fetchArticle(store.getState, store.dispatch, articleOrder[index]);
    }, index * 2000);
}

ReactDOM.render(
    <Provider store={store}>
        <SiteHeader />
        <TagList />
        <Blog />
    </Provider>,
    document.getElementById('root') as HTMLElement
)