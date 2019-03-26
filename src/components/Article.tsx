import * as React from 'react';

import './Article.scss';

export interface ArticleValues {
    id: string;
    key: string;
    title: string;
    content?: string;
    expanded: boolean;
    url: string | null;
}

export interface ArticleDispatch {
    expandArticle: (articleId: string) => void;
    loadContent: (articleId: string, url: string) => void;
}

export type ArticleProps = ArticleValues & ArticleDispatch;

function Article({id, expandArticle, loadContent, url, title, content, expanded }: ArticleProps) {
    const contentStyles = ['content'];
    expanded && contentStyles.push('expanded');

    const nodes = (
        <div className="article">
            <div className="title">{ title }</div>
            { content && <div className={contentStyles.join(' ')} dangerouslySetInnerHTML={{ __html: content }}></div> }
            { content && !expanded && <button className="expand" onClick={() => expandArticle(id)}>Expand</button> }
            { !content && url && <button className="expand" onClick={() => loadContent(id, url)}>Load Content</button> }
        </div>
    );

    return nodes;
}

export default Article;
