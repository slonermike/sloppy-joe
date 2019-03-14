import { SiteAction } from '../actions';
import { StoreState, BlogMetadata, ArticleMetadata, ArticleState } from '../types';
import { EXPAND_ARTICLE, INITIALIZE_ARTICLE_METADATA, UPDATE_ARTICLE_CONTENT } from '../constants';

const ARTICLE_FOLDER = './content/';

function getArticle(state: StoreState, id: string): ArticleState | null {
    // TODO: put these in a better indexed set, rather than searching.
    return state.articles.find((article) => article.id === id) || null;
}

function addArticle(state: StoreState, article: ArticleMetadata) {
    // TODO: update the existing article if it's present.
    state.articles.push({
        id: article.file,
        title: article.title,
        file: `${ARTICLE_FOLDER}${article.file}`,
        expanded: false
    });
}

function getArticleByIndex(state: StoreState, index: number) {
    return state.articles[index];
}

export function siteReducer(state: StoreState, action: SiteAction): StoreState {
    switch (action.type) {
        case INITIALIZE_ARTICLE_METADATA: {
            // Retrieve our article metadata.
            const rawMetadata = require('../content.json') as BlogMetadata;
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

            let article;
            if (action.articleId !== undefined) {
                article = getArticle(newState, action.articleId);
            } else if (action.articleIndex !== undefined) {
                article = getArticleByIndex(newState, action.articleIndex);
            }

            if (article) {
                article.expanded = true;
                return newState;
            } else {
                break;
            }
        }
        case UPDATE_ARTICLE_CONTENT: {
            const newState = {
                ...state
            };

            let article;
            if (action.articleId !== undefined) {
                article = getArticle(newState, action.articleId);
            }

            if (article) {
                article.content = action.content;
                return newState;
            } else {
                break;
            }
        }
        default: break;
    }

    return state;
}