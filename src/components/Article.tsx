import * as React from 'react';

import './Article.css';

export interface ArticleProps {
    key: string;
    title: string;
    content?: string;
    expanded: boolean;
}

function Article({title, content}: ArticleProps) {

    const nodes = (
        <div className="article">
            <div className="title">{ title }</div>
            { content && <div className="content">{ content }</div> }
        </div>
    );

    return nodes;
}

export default Article;
