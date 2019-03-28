import * as constants from '../constants';
import { StoreState, SiteMetadata } from 'src/types';
import { Dispatch } from 'react';
import { sanitize } from 'dompurify';

export type SiteAction = ExpandArticle |
                         UpdateArticleContent |
                         FocusTag |
                         UpdateSite |
                         SelectSection;
/**
 * Filter content to only include stuff associated with the specified tag.
 * @param tag Name of the tag to filter to. Null to clear focus.
 */
export function focusTag(tag: string | null): FocusTag {
    return {
        type: constants.FOCUS_TAG,
        tag
    };
}
export function clearTagFocus(): FocusTag {
    return {
        type: constants.FOCUS_TAG,
        tag: null
    };
}
export interface FocusTag {
    type: constants.FOCUS_TAG,
    tag: string | null
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
    };
}
export interface UpdateArticleContent {
    type: constants.UPDATE_ARTICLE_CONTENT;
    articleId: string;
    content: string;
}

/**
 * Update the site from the top level.
 * @param metadata Metadata to apply to the site.
 */
export function setSiteContent(metadata: SiteMetadata): UpdateSite {
    return {
        type: constants.UPDATE_SITE,
        metadata
    };
}
export interface UpdateSite {
    type: constants.UPDATE_SITE,
    metadata: SiteMetadata
};

export function selectSection(id: string): SelectSection {
    return{
        type: constants.SELECT_SECTION,
        id
    };
}
export interface SelectSection {
    type: constants.SELECT_SECTION,
    id: string
};

export function fetchArticle(dispatch: Dispatch<SiteAction>, id: string, url: string): Promise<void> {
    // TODO: set article in loading state.
    return fetch(url)
        .then((response) => response.text())
        .then((text) => sanitize(text))
        .then((text) => dispatch(updateArticleContent(id, text)));
}

export function fetchContent(getState: () => StoreState, dispatch: Dispatch<SiteAction>): Promise<void> {
    const sourceFile = './content/content.json';
    return fetch(sourceFile)
    .then((response) => response.json())
    .then((site) => dispatch(setSiteContent(site as SiteMetadata)));
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