import * as React from 'react';
import Article from '../containers/Article';

export interface BlogValueProps {
    title: string;
    articles: string[];
}

export interface BlogDispatchProps {
}

export type BlogProps = BlogValueProps & BlogDispatchProps;

class Blog extends React.Component<BlogProps> {
    public componentDidUpdate() {
        document.title = this.props.title;
    }

    public render() {
        return (
            <div className="blog">
                {this.props.articles.map((articleId: string) => {
                    return <Article id={articleId} key={articleId} />
                })}
            </div>
        );
    }
}

export default Blog;
