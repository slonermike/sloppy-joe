import * as constants from '../constants';

export type SiteAction = ExpandArticle |
                         RequestInitialMetadata;

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
export interface ExpandArticle {
    type: constants.EXPAND_ARTICLE;
    articleId: string;
}