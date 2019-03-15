import * as React from 'react';

import './Article.scss';

export interface ArticleProps {
    id: string;
    key: string;
    title: string;
    content?: string;
    expanded: boolean;
    expandArticle: (articleId: string) => void;
}

function Article({id, expandArticle, title, content, expanded }: ArticleProps) {
    const contentStyles = ['content'];
    expanded && contentStyles.push('expanded');

    const nodes = (
        <div className="article">
            <div className="title">{ title }</div>
            { content && <div className={contentStyles.join(' ')} dangerouslySetInnerHTML={{ __html: content }}></div> }
            { !expanded && <button className="expand" onClick={() => expandArticle(id)}>Expand</button> }
        </div>
    );

    return nodes;
}

export default Article;
