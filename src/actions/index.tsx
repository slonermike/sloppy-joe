import * as constants from '../constants';
import { StoreState } from 'src/types';
import { Dispatch } from 'react';

export type SiteAction = ExpandArticle |
                         RequestInitialMetadata |
                         UpdateArticleContent;

/**
 * Retrieves the base metadata for the articles.
 */
export function initializeArticleMetadata(): RequestInitialMetadata {
    return {
        type: constants.INITIALIZE_ARTICLE_METADATA
    };
}
export interface RequestInitialMetadata {
    type: constants.INITIALIZE_ARTICLE_METADATA;
}

/**
 * Update the content for an article.
 *
 * @param articleId ID of the article being updated.
 * @param content New content to populate it with.
 */
export function updateArticleContent(articleId: string, content: string): UpdateArticleContent {
    return {
        type: constants.UPDATE_ARTICLE_CONTENT,
        articleId,
        content
    }
}
export interface UpdateArticleContent {
    type: constants.UPDATE_ARTICLE_CONTENT;
    articleId: string;
    content: string;
}

export function fetchArticle(getState: () => StoreState, dispatch: Dispatch<SiteAction>, index: number): Promise<void> {
    const url = getState().articles[index].file;
    const articleId = getState().articles[index].id;
    // TODO: set article in loading state.
    return fetch(url)
        .then((response) => response.text())
        .then((text) => dispatch(updateArticleContent(articleId, text)));
}

/**
 * Expand an article into full view.
 *
 * @param articleId ID of the article to be displayed.
 */
export function expandArticle(articleId: string): ExpandArticle {
    return {
        type: constants.EXPAND_ARTICLE,
        articleId
    };
}

/**
 * Expand an article into full view.
 *
 * @param articleId ID of the article to be displayed.
 */
export function expandArticleByIndex(index: number): ExpandArticle {
    return {
        type: constants.EXPAND_ARTICLE,
        articleIndex: index
    };
}

export interface ExpandArticle {
    type: constants.EXPAND_ARTICLE;
    articleId?: string;
    articleIndex?: number;
}