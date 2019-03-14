import * as React from 'react';

import './Article.css';
import Article from 'src/containers/Article';

export interface BlogProps {
    articles: string[];
    onExpand: (id: string) => void;
}

function Blog({ articles }: BlogProps) {
    return (
        <div className="blog">
            {articles.map((articleId: string) => {
                return <Article id={articleId} key={articleId} />
            })}
        </div>
    );
}

export default Blog;
