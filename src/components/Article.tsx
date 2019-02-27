import * as React from 'react';

import './Article.css';

export interface ArticleProps {
    title: string;
    content?: string;
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
