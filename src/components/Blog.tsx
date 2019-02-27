import * as React from 'react';

import './Article.css';
import Article, { ArticleProps } from './Article';

export interface BlogProps {
    articles: ArticleProps[];
}

function Blog({ articles }: BlogProps) {
    return (
        <div className="blog">
            {articles.map((article) => {
                return <Article title={article.title} content={article.content} />
            })}
        </div>
    );
}

export default Blog;
