import { SiteAction } from '../actions';
import { StoreState, BlogMetadata, ArticleMetadata } from '../types';
import { EXPAND_ARTICLE, INITIALIZE_ARTICLE_METADATA } from '../constants';

function getArticle(state: StoreState, id: string) {
    // TODO: put these in a better indexed set, rather than searching.
    return state.articles.find((article) => article.id === id);
}

function addArticle(state: StoreState, article: ArticleMetadata) {
    // TODO: update the existing article if it's present.
    state.articles.push({
        id: article.file,
        title: article.title,
        expanded: false
    });
}

export function siteReducer(state: StoreState, action: SiteAction): StoreState {
    switch (action.type) {
        case INITIALIZE_ARTICLE_METADATA: {
            // Retrieve our article metadata.
            const rawMetadata = require('../content/index.json') as BlogMetadata;
            const newState = {
                ...state
            };
            for (const article of rawMetadata.entries) {
                addArticle(newState, article);
            }
            return newState;
        }
        case EXPAND_ARTICLE: {
            const newState = {
                ...state
            };
            const article = getArticle(newState, action.articleId);
            if (article) {
                article.expanded = true;
                return newState;
            } else {
                break;
            }
        }
        default: break;
    }

    return state;
}