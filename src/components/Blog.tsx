import * as React from 'react';

import './Article.css';
import Article, { ArticleProps } from './Article';

export interface BlogProps {
    articles: ArticleProps[];
    onExpand: (id: string) => void;
}

function Blog({ articles }: BlogProps) {
    return (
        <div className="blog">
            {articles.map((article) => {
                // TODO: isn't there a cleaner way to pass this data along?  Why can't i just pass 'article'?
                return <Article title={article.title} content={article.content} expanded={article.expanded} key={article.key} />
            })}
        </div>
    );
}

export default Blog;
