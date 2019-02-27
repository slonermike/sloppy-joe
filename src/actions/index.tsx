import * as constants from '../constants';

export interface AddArticle {
    type: constants.ADD_ARTICLE;
    title: string;
    content?: string;
}

export type SiteAction = AddArticle;

export function addArticle(title: string, content?: string): AddArticle {
    return {
        type: constants.ADD_ARTICLE,
        title,
        content
    };
}