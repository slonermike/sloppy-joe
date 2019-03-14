import Blog, { BlogProps } from '../components/Blog';

import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { expandArticle, SiteAction } from 'src/actions';
import { ArticleProps } from 'src/components/Article';

export function mapStateToProps(state: StoreState): Partial<BlogProps> {
    let articles: ArticleProps[] = state.articles.map((articleState) => {
        const { title, content, expanded, id } = articleState;
        return { title, content, expanded, key: id };
    });

    return {
        articles: articles
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): Partial<BlogProps> {
    return {
        onExpand: (articleId: string) => dispatch(expandArticle(articleId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
