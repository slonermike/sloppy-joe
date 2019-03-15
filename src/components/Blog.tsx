import * as React from 'react';
import Article from '../containers/Article';

export interface BlogValueProps {
    articles: string[];
}

export interface BlogDispatchProps {
}

export type BlogProps = BlogValueProps & BlogDispatchProps;

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
