import * as React from 'react';

import './Article.scss';
import { Link } from 'react-router-dom';

export interface ArticleValues {
    id: string;
    sectionId: string;
    key: string;
    title: string;
    content?: string;
    expanded: boolean;
    url: string | null;
    date: Date;
}

export interface ArticleDispatch {
    expandArticle: (articleId: string) => void;
    loadContent: (articleId: string, url: string) => void;
}

export type ArticleProps = ArticleValues & ArticleDispatch;

class Article extends React.Component<ArticleProps> {
    // TODO: check this on more distinct articles.  Does it update the content when we change filters?
    public componentDidMount() {
        if (!this.props.content && this.props.url) {
            this.props.loadContent(this.props.id, this.props.url);
        }
    }

    public render() {
        const {id, sectionId, expandArticle, title, content, expanded, date} = this.props;
        const contentStyles = ['content'];
        expanded && contentStyles.push('expanded');

        const nodes = (
            <div className="article">
                <Link className="title" to={`/section/${sectionId}/${id}`}>{ title }</Link>
                <div className="date">{ date.toLocaleDateString("en-US", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) }</div>
                { content && <div className={contentStyles.join(' ')} dangerouslySetInnerHTML={{ __html: content }}></div> }
                { content && !expanded && <button className="expand" onClick={() => expandArticle(id)}>Expand</button> }
            </div>
        );

        return nodes;
    }
}

export default Article;
