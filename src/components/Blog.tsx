import * as React from 'react';
import Article from 'src/containers/Article';

export interface BlogValueProps {
    articles: string[];
}

export interface BlogDispatchProps {
    onExpand: (id: string) => void;
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
