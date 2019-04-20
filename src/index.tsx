import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, Store } from "redux";
import { StoreState } from './types';
import { siteReducer } from './reducers';

import { Provider } from 'react-redux';
import { SiteAction, fetchContent } from './actions';
import SiteHeader from './containers/SiteHeader';
import Blog from './containers/Blog';
import TagList from './containers/TagList';
import SectionList from './containers/SectionList';

const initialState: StoreState = {
    siteTitle: 'Site Title',
    articles: {},
    sections: {},
    articleOrder: [],
    siteDivs: {},
    focusedTag: null,
    selectedSection: null,
    defaultSection: ''
}

const store: Store<StoreState, SiteAction> = createStore<StoreState, SiteAction, any, any>(siteReducer, initialState);
fetchContent(store.getState, store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <SiteHeader />
        <SectionList />
        <TagList />
        <Blog />
    </Provider>,
    document.getElementById('root') as HTMLElement
)