import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, Store } from "redux";
import { StoreState } from './types';
import { siteReducer } from './reducers';

import { Provider } from 'react-redux';
import { SiteAction, fetchContent, selectSection, focusArticle } from './actions';
import SiteHeader from './containers/SiteHeader';
import Blog from './containers/Blog';
import TagList from './containers/TagList';
import SectionList from './containers/SectionList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const initialState: StoreState = {
    hasPopulated: false,
    siteTitle: '',
    articles: {},
    sections: {},
    articleOrder: [],
    siteDivs: {},
    siteCss: [],
    focusedTag: null,
    selectedSection: null,
    focusedArticle: null,
    defaultSection: ''
}

interface RouteParams {
    sectionId?: string;
    articleId?: string;
}

let centralStore: Store<StoreState, SiteAction> = createStore<StoreState, SiteAction, any, any>(siteReducer, initialState);
fetchContent(centralStore.getState, centralStore.dispatch);

function fetchContentUnlessPresent(): Promise<void> {
    return new Promise((resolve, _reject) => {
        if (centralStore.getState().hasPopulated) {
            resolve();
        } else {
            fetchContent(centralStore.getState, centralStore.dispatch)
                .then(() => resolve());
        }
    });
}

function renderPage(params: RouteParams = {}) {
    const { sectionId, articleId } = params;
    fetchContentUnlessPresent()
        .then(() => sectionId && centralStore.dispatch(selectSection(sectionId)))
        .then(() => centralStore.dispatch(focusArticle(articleId || null)))
    return <div />
}

ReactDOM.render(
    <Provider store={centralStore}>
        <Router>
            <SiteHeader />
            <SectionList />
            <TagList />
            <Blog />
            <Route exact={true} path="/" render={() => renderPage()} />
            <Route exact={true} path="/section/:sectionId" render={({ match }) => renderPage(match.params)} />
            <Route exact={true} path="/section/:sectionId/:articleId" render={({ match }) => renderPage(match.params)} />
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
)